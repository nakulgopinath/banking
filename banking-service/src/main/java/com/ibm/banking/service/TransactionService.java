package com.ibm.banking.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.ibm.banking.exception.BankingApplicationException;
import com.ibm.banking.model.Customer;
import com.ibm.banking.model.Transaction;
import com.ibm.banking.repository.TransactionRepository;
import com.ibm.banking.service.SequenceGeneratorService;

import com.mongodb.DB;
import com.mongodb.MongoClient;


//Done by Athul KS
@Service
public class TransactionService {
	
	@Autowired
	TransactionRepository transactionRepo;
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	
	MongoClient mongoClient = new MongoClient();
	 DB db = mongoClient.getDB("test");

	public boolean transactionCreate(@Valid Transaction transaction) throws BankingApplicationException {
		try {
			transaction.setTransactionId(Integer.toString((Integer.parseInt(sequenceGeneratorService.generateSequence(db,transaction.SEQUENCE_NAME))+10000)));
			transactionRepo.save(transaction);
			Customer sender = customerService.getById(transaction.senderAccNo);
			Customer receiver = customerService.getById(transaction.recieverAccNo);
			customerService.updateBalance(sender, -(transaction.getAmount()));
			customerService.updateBalance(receiver, transaction.getAmount());			
			return true;
		} catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Transactioin failed ; try again after sometime", e);
		}
	}
	

	public List<Transaction> getAllBySenderAccNo(Optional<String> senderAccNo) throws BankingApplicationException {
		try {
		return transactionRepo.findBySenderAccNo(senderAccNo);
	} catch (DataAccessException e) {
		e.printStackTrace();
		throw new BankingApplicationException("Transactioins not found ; try again after sometime", e);
		}
	}
	
	public List<Transaction> getAllByReceiverAccNo(Optional<String> receiverAccNo) throws BankingApplicationException {
		try {
		return transactionRepo.findByRecieverAccNo(receiverAccNo);
	} catch (DataAccessException e) {
		e.printStackTrace();
		throw new BankingApplicationException("Transactioins not found ; try again after sometime", e);
		}
	}

	public Optional<Transaction> getTransaction(String tId) throws BankingApplicationException {
		try {
			return transactionRepo.findById(tId);
		} catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Transactioins not found ; try again after sometime", e);
			}
	}

	
}
