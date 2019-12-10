package com.ibm.banking.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.banking.model.AccountCredentials;
import com.ibm.banking.repository.AccountCredentialsRepository;


@RestController
public class HomeController {
	
//	@Autowired
//	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	AccountCredentialsRepository accountCredentialsRepository;
	
	@GetMapping("/")
	public String homePage()
	{
		return "Home";
	}
	
	@PostMapping(path="/register",consumes = {MediaType.APPLICATION_JSON_VALUE})
	public boolean registerAccount(@RequestBody @Valid AccountCredentials account)
	{
		
		accountCredentialsRepository.save(account);

		return true;
	}

}
