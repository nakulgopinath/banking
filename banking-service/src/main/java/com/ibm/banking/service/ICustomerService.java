package com.ibm.banking.service;

import javax.validation.Valid;

import com.ibm.banking.model.Customer;

public interface ICustomerService {

	
	public boolean customerCreate(@Valid Customer customer) ;
	
	
		
}

