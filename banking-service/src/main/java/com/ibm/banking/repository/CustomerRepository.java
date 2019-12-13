package com.ibm.banking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.banking.model.Customer;


//Done by Athul KS
public interface CustomerRepository extends MongoRepository<Customer, Object>{
	Customer findByAccountNo(String AccountNo);
	Customer findByUsername(String username);

}
