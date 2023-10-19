package com.mulaudzi.controller;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mulaudzi.model.Response;

@RestController
@RequestMapping("/api/v1")
public class ServerController {

	@GetMapping("/servers")
	ResponseEntity<Response> getServers(){
		return ResponseEntity.ok(
				Response.builder()
				.timeStamp(LocalDateTime.now())
				.message("Servers retrieved")
				.httpStatus(HttpStatus.OK)
				.build()
				);
	}
}
