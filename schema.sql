CREATE DATABASE IF NOT EXISTS banking_system;
use banking_system;
create table IF NOT EXISTS user_details(id INT auto_increment Not Null primary key,role varchar(250) not null, account_status varchar(250) not null, account_number varchar(250),name varchar(250) not null,mobile double not null, email varchar(250) not null, address varchar(250) not null,aadhaar double not null,pan varchar(250) not null, dob date not null,username varchar(250),password varchar(250), balance int ,profile_pic blob);
create table IF NOT EXISTS account_transaction(id int , trans_id int not null,senderAccountNumber varchar(250) not null,benificiaryAccountNumber varchar(250) not null, type varchar(250) not null,time datetime not null ,amount double not null,status boolean not null default 0, foreign key (id) references user_details(id));

