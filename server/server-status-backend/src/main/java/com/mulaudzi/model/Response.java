package com.mulaudzi.model;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder // gives a factory builder for this class
@JsonInclude(JsonInclude.Include.NON_NULL) // excludes nulls
public class Response {
	private LocalDateTime timeStamp;
	private HttpStatus httpStatus;
	private String message;
	private String error;
	private Map<String, Object> data;
	
}
