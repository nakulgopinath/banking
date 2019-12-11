package com.ibm.banking.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ibm.banking.model.Credentials;

public interface CredentialsRepository extends MongoRepository<Credentials, Object> {
	Optional<Credentials> findByUserName(String userName);
	Credentials findBySecurityQuestion(String securityQuestion) throws UsernameNotFoundException;

}
