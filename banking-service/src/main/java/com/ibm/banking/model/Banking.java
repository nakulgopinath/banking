package com.ibm.banking.model;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document("banking")
public class Banking {
	@Id
	public String AccountNo;
	public Date AccountStartingDate;
	public double BankBalance;
	public ArrayList<Transaction> Transaction;
	
	
	
	
	
	public Banking(String accountNo, Date accountStartingDate, double bankBalance,
			ArrayList<com.ibm.banking.model.Transaction> transaction) {
		super();
		AccountNo = accountNo;
		AccountStartingDate = accountStartingDate;
		BankBalance = bankBalance;
		Transaction = transaction;
	}
	
	
	
	public String getAccountNo() {
		return AccountNo;
	}
	public void setAccountNo(String accountNo) {
		AccountNo = accountNo;
	}
	public Date getAccountStartingDate() {
		return AccountStartingDate;
	}
	public void setAccountStartingDate(Date accountStartingDate) {
		AccountStartingDate = accountStartingDate;
	}
	public double getBankBalance() {
		return BankBalance;
	}
	public void setBankBalance(double bankBalance) {
		BankBalance = bankBalance;
	}
	public ArrayList<Transaction> getTransaction() {
		return Transaction;
	}
	public void setTransaction(ArrayList<Transaction> transaction) {
		Transaction = transaction;
	}
	
}
