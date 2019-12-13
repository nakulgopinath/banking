package com.ibm.banking.model;

import java.util.ArrayList;
import java.util.Date;
//Done By Himanshu
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("customer")
public class Customer {

	
	@Id
	private String accountNo;
	private String cName;
	private String username;
	private String cEmail;
	private String cPhone;
	private Date accountStartingDate;
	private double bankBalance;
	private ArrayList<Transaction> transaction;
	
	
	
	public Customer(String accountNo, String cName, String username, String cEmail, String cPhone,
			Date accountStartingDate, double bankBalance, ArrayList<Transaction> transaction) {
		super();
		this.accountNo = accountNo;
		this.cName = cName;
		this.username = username;
		this.cEmail = cEmail;
		this.cPhone = cPhone;
		this.accountStartingDate = accountStartingDate;
		this.bankBalance = bankBalance;
		this.transaction = transaction;
	}



	public String getAccountNo() {
		return accountNo;
	}



	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}



	public String getcName() {
		return cName;
	}



	public void setcName(String cName) {
		this.cName = cName;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getcEmail() {
		return cEmail;
	}



	public void setcEmail(String cEmail) {
		this.cEmail = cEmail;
	}



	public String getcPhone() {
		return cPhone;
	}



	public void setcPhone(String cPhone) {
		this.cPhone = cPhone;
	}



	public Date getAccountStartingDate() {
		return accountStartingDate;
	}



	public void setAccountStartingDate(Date accountStartingDate) {
		this.accountStartingDate = accountStartingDate;
	}



	public double getBankBalance() {
		return bankBalance;
	}



	public void setBankBalance(double bankBalance) {
		this.bankBalance = bankBalance;
	}



	public ArrayList<Transaction> getTransaction() {
		return transaction;
	}



	public void setTransaction(ArrayList<Transaction> transaction) {
		this.transaction = transaction;
	}



	@Override
	public String toString() {
		return "Customer [accountNo=" + accountNo + ", cName=" + cName + ", username=" + username + ", cEmail=" + cEmail
				+ ", cPhone=" + cPhone + ", accountStartingDate=" + accountStartingDate + ", bankBalance=" + bankBalance
				+ ", transaction=" + transaction + "]";
	}
	
	
	
	
	




	
	
	
	

	
	
	
	
	
	
	
	
}