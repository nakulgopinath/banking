package com.ibm.banking.model;

public class Credentials {
	public Credentials(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	
	public Credentials()
	{}
	
	String userName;
	String password;
	String securityQuestion;
	String answer;
	
	public String getSecurityQuestion() {
		return securityQuestion;
	}

	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		// TODO Auto-generated method stub
		return null;
	}

	

}	
