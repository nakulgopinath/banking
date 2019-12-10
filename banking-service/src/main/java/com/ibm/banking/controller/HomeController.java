package com.ibm.banking.controller;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.banking.model.Credentials;
import com.ibm.banking.repository.CredentialsRepository;


@RestController
public class HomeController {
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	CredentialsRepository accountCredentialsRepository;
	
	@GetMapping("/")
	public String homePage()
	{
		return "Home";
	}
	
	@GetMapping(path="/authenticate")
	public Principal loginAccount(Principal account)
	{
		return account;
	}
	
	
	@PostMapping(path="/register",consumes = {MediaType.APPLICATION_JSON_VALUE})
	public boolean registerAccount(@RequestBody @Valid Credentials account)
	{
		System.out.println("Inside register");
		account.setPassword(bCryptPasswordEncoder.encode(account.getPassword()));
		accountCredentialsRepository.save(account);
		

		return true;
	}

}
