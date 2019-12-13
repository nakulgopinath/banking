package com.ibm.banking.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("transaction")
public class Transaction {
	
	@Transient
    public static final String SEQUENCE_NAME = "trans_sequence";

	@Id
	public String transactionId;
	public String senderAccNo;
	public String recieverAccNo;
	public Date tDate;
	public double amount;
	
	
	
	public Transaction(String transactionId, String senderAccNo, String recieverAccNo, Date tDate, double amount) {
		super();
		this.transactionId = transactionId;
		this.senderAccNo = senderAccNo;
		this.recieverAccNo = recieverAccNo;
		this.tDate = tDate;
		this.amount = amount;
	}
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public String getSenderAccNo() {
		return senderAccNo;
	}
	public void setSenderAccNo(String senderAccNo) {
		this.senderAccNo = senderAccNo;
	}
	public String getRecieverAccNo() {
		return recieverAccNo;
	}
	public void setRecieverAccNo(String recieverAccNo) {
		this.recieverAccNo = recieverAccNo;
	}
	public Date gettDate() {
		return tDate;
	}
	public void settDate(Date tDate) {
		this.tDate = tDate;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Transaction [transactionId=" + transactionId + ", senderAccNo=" + senderAccNo + ", recieverAccNo="
				+ recieverAccNo + ", tDate=" + tDate + ", amount=" + amount + "]";
	}
	
	
	
	
	
	
	
}
