package com.ibm.banking.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.ibm.banking.exception.BankingApplicationException;
import com.ibm.banking.model.Customer;
import com.ibm.banking.model.Transaction;
import com.ibm.banking.repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Autowired
	TransactionRepository transactionRepo;
	
	@Autowired
	CustomerService customerService;

	public boolean transactionCreate(@Valid Transaction transaction) throws BankingApplicationException {
		try {

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

	
}
