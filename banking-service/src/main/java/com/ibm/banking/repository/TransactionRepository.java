package com.ibm.banking.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.banking.model.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, Object>{
	


}
