package com.ibm.banking.controller;

import java.security.Principal;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.banking.model.Credentials;
import com.ibm.banking.repository.CredentialsRepository;
import com.mongodb.MongoWriteException;


//Done By Nakul G Nair

@RestController
@CrossOrigin("*")
public class HomeController {

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	CredentialsRepository accountCredentialsRepository;

	@GetMapping("/")
	public String homePage() {
		return "Home";
	}

	@PostMapping(path = "/authenticate")
	public Principal loginAccount(Principal user) {
		return user;
	}

	@PostMapping(path = "/register", consumes = { MediaType.APPLICATION_JSON_VALUE })
	public boolean registerAccount(@RequestBody @Valid Credentials account) {
		
		try {
			account.setPassword(bCryptPasswordEncoder.encode(account.getPassword()));
			accountCredentialsRepository.save(account);
			return true;
			
		}
		catch(Exception e)
		{
			return false;
		}
		

		
	}

	@PostMapping(path = "/forgotpassword", consumes = { MediaType.APPLICATION_JSON_VALUE })
	public String forgotPassword(@RequestBody @Valid Credentials account) {
		
		Credentials response = accountCredentialsRepository.findByUserName(account.getUserName());
		try {
			
			if(response.getUserName().equals(null))
			{
				return "Username Not Found";
			}
			
			else if (response.getSecurityQuestion() .equals(account.getSecurityQuestion())) {
				
				
				if (account.getAnswer().equals(response.getAnswer()))
					return response.getUserName();

				else
					return "Invalid Answer";
			}
			else if(response.getSecurityQuestion() != account.getSecurityQuestion())
				return "Invalid Security Question";
			else
				return response.getUserName();

		} catch (NullPointerException e) {
			return "Username Not Found";
		}

	}
	
	@PutMapping(path="/resetpassword",consumes= {MediaType.APPLICATION_JSON_VALUE})
	public boolean resetPassword(@RequestBody @Valid Credentials account) {
		
		
		Credentials response = accountCredentialsRepository.findByUserName(account.getUserName());
	
		
		
		try {
			response.setPassword(bCryptPasswordEncoder.encode(account.getPassword()));
			response.set_id(response.get_id());
			accountCredentialsRepository.save(response);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
		
			
		
	
		
		
	
			
		

	}
	
	
}

