package com.mulaudzi.controller;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mulaudzi.model.Response;
import com.mulaudzi.model.ServerStatus;

@RestController
@RequestMapping("/api/v1")
public class ServerController {
    public static ServerStatus[] SERVER_STATUS_DATA = new ServerStatus[] {
            new ServerStatus("Movies Server", "192.168.8.1", "PRODUCTION", "DOWN"),
            new ServerStatus("Games Server", "192.168.8.2", "PRODUCTION", "DOWN"),
            new ServerStatus("Profiles Server", "192.168.8.3", "DEVELOPMENT", "DOWN"),
            new ServerStatus("Profiles Server", "162.159.36.12", "PRODUCTION", "DOWN")
        };
    
	@GetMapping("/servers")
	ResponseEntity<Response> getServers(){

		
		return ResponseEntity.ok(
				Response.builder()
				.timeStamp(LocalDateTime.now())
				.message("Servers retrieved")
				.httpStatus(HttpStatus.OK)
				.data(Map.of("servers",SERVER_STATUS_DATA))
				.build()
				);
	}
}
