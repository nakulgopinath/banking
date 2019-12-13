package com.ibm.banking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//Done by Athul KS
@Document("database_sequences")
public class DatabaseSequences {
	
	@Id
    private String id;
    private long seq;
}