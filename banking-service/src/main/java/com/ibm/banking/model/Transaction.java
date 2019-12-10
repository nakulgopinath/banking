package com.ibm.banking.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("transaction")
public class Transaction {

	@Id
	public String TransactionId;
	public String SenderName;
	public String RecieverName;
	public Date Tdate;
	public double amount;
	
	
	public Transaction(String transactionId, String senderName, String recieverName, Date tdate, double amount) {
		super();
		TransactionId = transactionId;
		SenderName = senderName;
		RecieverName = recieverName;
		Tdate = tdate;
		this.amount = amount;
	}
	
	
	
	
	
	public String getTransactionId() {
		return TransactionId;
	}
	public void setTransactionId(String transactionId) {
		TransactionId = transactionId;
	}
	public String getSenderName() {
		return SenderName;
	}
	public void setSenderName(String senderName) {
		SenderName = senderName;
	}
	public String getRecieverName() {
		return RecieverName;
	}
	public void setRecieverName(String recieverName) {
		RecieverName = recieverName;
	}
	public Date getTdate() {
		return Tdate;
	}
	public void setTdate(Date tdate) {
		Tdate = tdate;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "Transaction [TransactionId=" + TransactionId + ", SenderName=" + SenderName + ", RecieverName="
				+ RecieverName + ", Tdate=" + Tdate + ", amount=" + amount + "]";
	}
	
	
	
}
