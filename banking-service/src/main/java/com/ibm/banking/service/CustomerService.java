package com.ibm.banking.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.banking.model.Customer;
import com.ibm.banking.repository.CustomerRepository;
import com.mongodb.DB;
import com.mongodb.MongoClient;
@Service
public class CustomerService implements ICustomerService{
	
	@Autowired
	CustomerRepository customerRepo;
	
	
	 MongoClient mongoClient = new MongoClient();
	 DB db = mongoClient.getDB("banking");
	

	@Override
	public boolean customerCreate(@Valid Customer customer) {
		// TODO Auto-generated method stub
		return false;
	}

}
