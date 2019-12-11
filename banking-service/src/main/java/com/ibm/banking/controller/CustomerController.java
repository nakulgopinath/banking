	package com.ibm.banking.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ibm.banking.exception.BankingApplicationException;
import com.ibm.banking.model.Customer;
import com.ibm.banking.model.ResponseMessage;
import com.ibm.banking.service.CustomerService;

@RestController
@RequestMapping("/customers")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	// List All Customer GET /customers by Id
	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin("*")
	public Customer getCustomer(@RequestParam(name = "id", required = true) String id)
			throws BankingApplicationException {
		System.out.println("Inside customer get controller");
		return customerService.getById(id);

	}

	// Delete Customer DELETE /customers by Id
	@DeleteMapping
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> deleteCustomer(@RequestParam(name = "id", required = true) String id)
			throws BankingApplicationException {

		boolean x = customerService.delete(id);
		ResponseMessage resMsg;
		if (x) {
			resMsg = new ResponseMessage("Success", "Customer deleted successfully");

		} else {
			resMsg = new ResponseMessage("Failure", "Failed to delete");

		}
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(id).toUri();

		return ResponseEntity.created(location).body(resMsg);
	}

	@PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> createCustomer(@RequestBody @Valid Customer customer)
			throws BankingApplicationException {

		ResponseMessage resMsg;

		customerService.customerCreate(customer);

		resMsg = new ResponseMessage("Success", new String("Customer created successfully."));

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(customer.getcId())
				.toUri();

		return ResponseEntity.created(location).body(resMsg);

	}

	@PutMapping(value = "/{id}", consumes = { MediaType.APPLICATION_JSON_VALUE })
	@CrossOrigin("*")
	public ResponseEntity<ResponseMessage> updateCustomer(@PathVariable String id,
			@RequestBody Customer updatedCustomer) throws BankingApplicationException {

		ResponseMessage resMsg;

		updatedCustomer.setcId(id);

		customerService.updateCustomer(updatedCustomer);

		resMsg = new ResponseMessage("Success", new String("Customer updated successfully"));

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(updatedCustomer.getcId()).toUri();

		return ResponseEntity.created(location).body(resMsg);
	}

}
