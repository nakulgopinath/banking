package com.ibm.banking.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.banking.model.Credentials;

public interface CredentialsRepository extends MongoRepository<Credentials, Object> {
	Optional<Credentials> findByUserName(String userName);

}
