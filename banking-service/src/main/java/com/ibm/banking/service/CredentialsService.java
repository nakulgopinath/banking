package com.ibm.banking.service;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ibm.banking.model.Credentials;
import com.ibm.banking.repository.CredentialsRepository;

import java.util.Optional;

@Service
public class CredentialsService implements UserDetailsService {

	@Autowired
	CredentialsRepository credentialsRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		System.out.println("Inside loadUserByUsername");
		Credentials accountUser = credentialsRepository.findByUserName(username).get();
		System.out.println(accountUser.getUserName());

		return new User(accountUser.getUserName(), accountUser.getPassword(), AuthorityUtils.createAuthorityList("ROLE_" + accountUser.getRole()));

	}
	
	
	

}
