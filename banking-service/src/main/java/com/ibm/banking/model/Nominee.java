package com.ibm.banking.model;

import org.springframework.data.annotation.Id;

public class Nominee {
	
	@Id
	private String id;
	private String name;
	private String relation;
	private String phone;
	
	
	public Nominee(String id, String name, String relation, String phone) {
		super();
		this.id = id;
		this.name = name;
		this.relation = relation;
		this.phone = phone;
	}
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRelation() {
		return relation;
	}
	public void setRelation(String relation) {
		this.relation = relation;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	

}
