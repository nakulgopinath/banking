package com.ibm.banking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("customer")
public class Customer {

	
	@Id
	private String cId;
	private String cName;
	private String username;
	private String cEmail;
	private String cPhone;
	private Banking cBankingDetails;
	
	
	
	
	public Customer(String cId, String cName, String username, String cEmail, String cPhone, Banking cBankingDetails) {
		super();
		this.cId = cId;
		this.cName = cName;
		this.username = username;
		this.cEmail = cEmail;
		this.cPhone = cPhone;
		this.cBankingDetails = cBankingDetails;
	}

	
	public String getcId() {
		return cId;
	}
	
	public void setcId(String cId) {
		this.cId = cId;
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
	public Banking getcBankingDetails() {
		return cBankingDetails;
	}
	public void setcBankingDetails(Banking cBankingDetails) {
		this.cBankingDetails = cBankingDetails;
	}
	
	@Override
	public String toString() {
		return "Customer [cId=" + cId + ", cName=" + cName + ", username=" + username + ", cEmail=" + cEmail
				+ ", cPhone=" + cPhone + ", cBankingDetails=" + cBankingDetails + "]";
	}
}
