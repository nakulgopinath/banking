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
	
	@PostMapping(path="/authenticate")
	public Principal loginAccount(Principal user)
	{
		System.out.println("Inside Authenticate");
		System.out.println(user.getName());
		return user;
	}
	
	
	@PostMapping(path="/register",consumes = {MediaType.APPLICATION_JSON_VALUE})
	public boolean registerAccount(@RequestBody @Valid Credentials account)
	{
		account.setPassword(bCryptPasswordEncoder.encode(account.getPassword()));
		accountCredentialsRepository.save(account);
		

		return true;
	}

}
