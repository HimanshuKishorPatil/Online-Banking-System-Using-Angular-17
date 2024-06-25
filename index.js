import express from 'express'
import nodemailer from 'nodemailer'
import mysql from 'mysql2'
import { getAlldata, isExist, register, applicationStatus, netBanking, listInactiveAccounts, deleteUser, createAccount, getAccountBalance, transaction, passbook } from "./database.js";
import fs from 'fs'

import dotenv from 'dotenv'

dotenv.config()
console.log("hello")

const app = express();
app.use(express.json());
//mailing service

async function sendMail(user, callback) {
  const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 2525,
    secure: false,
    smtp_sasl_auth_enable: true,
    // smtp_sasl_security_options: anou,
    // service:'gmail',
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "himanshupatil6999@gmail.com",
      pass: "D2ECB9F5E31A893B84112AFD7C37561DB310"
    }
  });

  let mail = {
    from: 'himanshupatil6999@gmail.com',
    to: user.useremail,
    subject: " welcome to bank",
    Text: "your mail is activated"
  }
  console.log(mail)
  try {
    let info = await transporter.sendMail(mail);
    callback(info);
  } catch (error) {
    console.log(error)
  }


}

// middleware for server client 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


// sql
const pool = mysql.createPool({multipleStatements:true,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,


})

const sqlFilePath = 'schema.sql';

fs.readFile(sqlFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading SQL file:', err);
        return;
    }
    // Execute the SQL commands from the file
    pool.query(data, (err, results) => {
        if (err) {
            console.error('Error executing SQL:', err);
            return;
        }
        console.log('SQL commands executed successfully:', results);
    });
});

// requests

app.get("/all", async (req, res) => {
  const resultData = await getAlldata()
  res.send(resultData)
})
app.get("/requestedNetbankingClients", async (req, res) => {
  const resultData = await listInactiveAccounts()
  res.send(resultData)
})

app.post("/login", async (req, res) => {
  const { username, password } = req.body
  console.log("reached")
  const resultData = await isExist(username, password)
  console.log(resultData)
  res.send(resultData)
})
app.post("/register", async (req, res) => {
  const { name, mobile, email, aadhaar, pan, dob, address, profile_pic } = req.body
  console.log("reached")
  const resultData = await register(name, mobile, email, aadhaar, pan, dob, address, profile_pic)
  console.log(resultData)
  res.send(resultData)
})

app.post("/applicationStatus", async (req, res) => {
  const { name, aadhaar } = req.body
  console.log("reached")
  const resultData = await applicationStatus(name, aadhaar)
  console.log(resultData)
  res.send(resultData)
})

app.post("/netBanking", async (req, res) => {
  const { name, account_number, username, password } = req.body
  console.log("reached")
  const resultData = await netBanking(name, account_number, username, password)
  console.log(resultData)
  res.send(resultData)
})

//admin
app.delete("/deleteNetbankingClient/:mobile", async (req, res) => {
  console.log(req.body)
  const mobile = req.params.mobile;
  console.log(mobile)
  const resultData = await deleteUser(mobile)
  console.log(resultData)
  res.send(resultData)
})
app.post("/approveNetbankingClients", async (req, res) => {

  const { name, mobile, email, amount } = req.body

  const account_number = Math.floor(1000000000 + Math.random() * 9000000000)
  const resultData = await createAccount(mobile, account_number, amount)
  let user = {
    username: name,
    useremail: email
  }
  sendMail(user, info => {
    console.log(`the mail has been send ${info.massageId}`);

  })

  console.log(resultData)
  res.send(resultData)
})

// app.post("/transfer",async(req,res)=>{

//   const {senderAccountNumber,beneficiaryAccountNumber,beneficiaryMobile,Amount}=req.body

//   const currentBalance = await getAccountBalance(senderAccountNumber)
//   if(currentBalance>Amount){


//     const varified = await isExist(beneficiaryAccountNumber,beneficiaryMobile)
//     if(verified){
//         const transactionType='netbanking'
//         const transactionId=Math.floor(1000000000 + Math.random() * 9000000000)
//         const transaction= await transaction(senderAccountNumber,beneficiaryAccountNumber,Amount,transactionType,transactionId)
//         res.send(true)
//     } 
//   }
//     res.send(false)
// })



app.post('/transfer', async (req, res) => {
  console.log("reached")
  const { sender, receiver, amount, mobile, name } = req.body;
  console.log(sender)
  // Generate a random 10-digit transaction ID
  const transactionID = Math.floor(1000000000 + Math.random() * 9000000000);
  console.log(transactionID)
  const response = await transaction(sender, receiver, amount, mobile, transactionID, name)
  console.log(response)
  res.send({response, transactionID});

});
app.get('/accountBalance/:account', async (req, res) => {
  const accountNumber = req.params.account
  console.log(accountNumber)
  const balance = await getAccountBalance(accountNumber)
  console.log(balance)
  res.send(balance)
})

app.get('/passbook/:accountNumber', async (req, res) => {
  const accountNum = req.params.accountNumber
  console.log(accountNum)
  const passbookPrint = await passbook(accountNum)

  res.send(passbookPrint)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('something broke!')
})

app.listen(5000, () => {
  
  console.log("server is running on port 5000")
})
