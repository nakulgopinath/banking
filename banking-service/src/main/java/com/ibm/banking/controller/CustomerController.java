package com.ibm.banking.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ibm.banking.exception.BankingApplicationException;
import com.ibm.banking.model.Customer;
import com.ibm.banking.model.ResponseMessage;
import com.ibm.banking.service.CustomerService;



@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping(path="/test")
	public void test()
	{
		System.out.println("Testing...");
	}
	
	@PostMapping(path="/customers" ,consumes = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> createCustomer(@RequestBody @Valid Customer customer) throws BankingApplicationException{

		ResponseMessage resMsg;
		
		customerService.customerCreate(customer);

		resMsg = new ResponseMessage("Success", new String ("Customer created successfully."));
		
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(customer.getcId()).toUri();

		return ResponseEntity.created(location).body(resMsg);

}
	
	@PutMapping(value = "/{id}", consumes = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> updateCustomer(@PathVariable String id, @RequestBody Customer updatedCustomer) throws BankingApplicationException {
		
		ResponseMessage resMsg;
		
		updatedCustomer.setcId(id);
		
		customerService.updateCustomer(updatedCustomer);
		
		resMsg = new ResponseMessage("Success", new String ("Customer updated successfully"));
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(updatedCustomer.getcId()).toUri();

		return ResponseEntity.created(location).body(resMsg);
	}
	
	
	
}
