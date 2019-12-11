package com.ibm.banking.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.ibm.banking.exception.BankingApplicationException;
import com.ibm.banking.model.Customer;
import com.ibm.banking.repository.CustomerRepository;
import com.mongodb.DB;
import com.mongodb.MongoClient;

@Service
public class CustomerService implements ICustomerService {

	@Autowired
	CustomerRepository customerRepo;

	MongoClient mongoClient = new MongoClient();
	DB db = mongoClient.getDB("banking");

	@Override
	public boolean customerCreate(@Valid Customer customer) throws BankingApplicationException {
		try {

			customerRepo.save(customer);
			return true;
		} catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Can not create customer now; try again after sometime", e);
		}
	}

	@Override
	public boolean updateCustomer(Customer updatedCustomer) throws BankingApplicationException {
		try {
			customerRepo.save(updatedCustomer);
			return true;
		} catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Customer can not be updated now; try again after sometime", e);
		}
	}

	@Override
	public Customer getById(String id) throws BankingApplicationException {
		try {
			return customerRepo.findByAccountNo(id);
		} catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Customer Not found", e);
		}
	}

	@Override
	public boolean delete(String id) throws BankingApplicationException {
		try {
			customerRepo.deleteById(id);
			return true;
		} catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Deletion failed", e);
		}

	}

	@Override
	public boolean updateBalance(Customer customer, double amount) throws BankingApplicationException {
		try {
			double OriginalAmount=customer.getBankBalance();
			OriginalAmount+=amount;
			customer.setBankBalance(OriginalAmount);
			customerRepo.save(customer);
			return true;
			
			
		}catch (DataAccessException e) {
			e.printStackTrace();
			throw new BankingApplicationException("Deletion failed", e);
		}
	}

}
