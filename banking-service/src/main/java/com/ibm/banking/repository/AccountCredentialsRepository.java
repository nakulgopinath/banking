package com.ibm.banking.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ibm.banking.model.AccountCredentials;

public interface AccountCredentialsRepository extends MongoRepository<AccountCredentials, Object> {
	Optional<AccountCredentials> findByUserName(String userName);

}
