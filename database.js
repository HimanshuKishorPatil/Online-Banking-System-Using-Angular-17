import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE

}).promise()


export async function getAlldata() {
    const [rows] = await pool.query("select * from user_details")
    return rows
}

export async function isExist(username, password) {
    const [rows] = await pool.query("select * from user_details where username=? and password=?", [username, password]);
    return rows

}

export async function register(name, mobile, email, aadhaar, pan, dob, address, profile_pic) {
    try {
        const [row] = await pool.query("insert into user_details(name,email,mobile,dob,aadhaar,pan,address,profile_pic,role,account_status) values (?,?,?,?,?,?,?,?,'client','inactive')", [name, email, mobile, dob, aadhaar, pan, address, profile_pic])
        return true;
    } catch (error) {
        return false;
    }

}

export async function applicationStatus(name, aadhaar) {
    try {
        const [row] = await pool.query("select account_number,account_status from user_details where name=? and aadhaar=?", [name, aadhaar])

        return row;
    } catch (error) {
        const [row] = [{
            account_number: "not registered",
            account_status: "inactive"
        }]
        return row;
    }
}

export async function netBanking(name, account_number, username, password) {
    try {
        const [row] = await pool.query("update user_details set username=?,password=? where name=? and account_number=?", [username, password, name, account_number])
        return true;
    } catch (error) {
        return false;
    }


}
export async function listInactiveAccounts() {
    try {
        const [row] = await pool.query("select * from user_details where account_status='inactive'")
        console.log("hi")
        return row;
    } catch (error) {
        return false;
    }

}

//admin
export async function deleteUser(mobile) {
    try {
        const [row] = await pool.query("delete from user_details where mobile=?", [mobile])
        return true;
    } catch (error) {
        return false;
    }


}
export async function createAccount(mobile, account_number, amount) {
    try {
        const [row] = await pool.query("update user_details set account_status='active',account_number=?,balance=? where mobile=?", [account_number, amount, mobile])
        return true;
    } catch (error) {
        return false;
    }


}
// export async function transaction(senderAccountNumber,beneficiaryAccountNumber, amount) {
//     try {
//         const [row] = await pool.query("start transaction; update userdetails set balace=(balance-?) where account_number=?; rollbackupdate userdetails set balance= balance+? where account_number=? rollback insert into  Comment",[])


//         return true;
//     } catch (error) {
//         return false;
//     }
// }


export async function getAccountBalance(AccountNumber) {
    try {
        const [row] = await pool.query("select balance from user_details where account_number=?", [AccountNumber])
        return row;
    } catch (error) {
        return false;
    }


}
export async function isActive(beneficiaryAccountNumber, beneficiaryMobile, beneficiaryName) {
    try {
        const [row] = await pool.query("select * from user_details where account_status='active' and account_number=? and name=? and mobile=?", [beneficiaryAccountNumber, beneficiaryName, beneficiaryMobile])
        if (row.length != 0)
            return true;
        else
            return false;
    } catch (error) {
        return false;
    }


}
export async function transaction(sender, receiver, amount, mobile, transactionID, name) {
    console.log("reached1")
    const [row] = await pool.query('SELECT balance FROM user_details WHERE account_number = ?', [sender])
    console.log("reached3")
    const senderBalance = row[0].balance;

    if (senderBalance >= amount) {
        const exist = await isActive(receiver, mobile, name);
        console.log(exist)
        if (exist) {
            const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const status = 1;
            const updateSenderBalance = "update user_details set balance = balance-? where account_number=?"
            const updateReceiverBalance = "update user_details set balance = balance+? where account_number=?"
            const updateHistory = 'INSERT INTO account_transaction (trans_id, senderAccountNumber,benificiaryAccountNumber,time, status,type,amount) VALUES (?, ?, ?, ?, ?,?,?)';

            pool.beginTransaction
            try {
                console.log("hello")
                await pool.query(updateSenderBalance, [amount, sender]);
                console.log("hello")
                await pool.query(updateReceiverBalance, [amount, receiver]);
                console.log("hello")
                await pool.query(updateHistory, [transactionID, sender, receiver, dateTime, status, "account transfer", amount])
                await pool.commit
                return true
            } catch (error) {
                await pool.rollback
                return false
            }



        }
        else {
            return false
        }


    }
    else {
        console.log("reached")
        // Update the transactions table for failed transaction
        const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const status = 0;

        const insertTransactionQuery =
            'INSERT INTO account_transaction (trans_id, senderAccountNumber,benificiaryAccountNumber,time, status,type,amount) VALUES (?, ?, ?, ?, ?,?,?)';

        pool.query(
            insertTransactionQuery,
            [transactionID, sender, receiver, dateTime, status, "account transfer", amount],
            (insertError) => {
                if (insertError) {
                    return false;
                } else {
                    return false;
                }
            }
        );
        return false
    }
}




export async function passbook(account_number) {
    try {

        const [roww] = await pool.query("create view passbook as select h.trans_id,h.amount,h.time,'debit' as type, case when h.status=0 then 'failed' when h.status=1 then 'success' end as status ,u.name as details from account_transaction h left join user_details u on h.benificiaryAccountNumber=u.account_number where h.senderAccountNumber=? UNION ALL  select h.trans_id,h.amount,h.time,'credit' as type, case when h.status=0 then 'failed' when h.status=1 then 'success' end as status ,u.name as details from account_transaction h left join user_details u on h.senderAccountNumber=u.account_number where h.benificiaryAccountNumber=?;", [account_number, account_number])
        console.log("created")
        const [row] = await pool.query("select * from passbook")
        console.log("print")
        const [rowww] = await pool.query("drop view passbook")
        console.log("deleted")
        return row;
    } catch (error) {
        const [row] = [{
            account_number: "not registered",
            account_status: "inactive"
        }]
        return row;
    }
}