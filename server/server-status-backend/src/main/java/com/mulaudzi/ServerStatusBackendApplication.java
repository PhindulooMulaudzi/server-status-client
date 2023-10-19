package com.mulaudzi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication
public class ServerStatusBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerStatusBackendApplication.class, args);
	}
}
