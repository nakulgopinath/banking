package com.ibm.banking.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.banking.model.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, Object>{
	List<Transaction> findBySenderAccNo(Optional<String> senderAccNo);	
	List<Transaction> findByRecieverAccNo(Optional<String> recieverAccNo);



}
