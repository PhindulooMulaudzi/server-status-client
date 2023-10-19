package com.mulaudzi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import jakarta.servlet.http.HttpServletRequest;

import java.util.Arrays;

@Configuration
public class CorsConfig {

	@Bean
	public CorsFilter corsFilter() {
		return new CorsFilter(new CustomCorsConfigurationSource());
	}

	private static class CustomCorsConfigurationSource implements CorsConfigurationSource {
		@Override
		public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
			CorsConfiguration corsConfiguration = new CorsConfiguration();
			corsConfiguration.setAllowCredentials(true);
			corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
			corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
					"Accept", "Authorization", "Origin, Accept", "X-Requested-With", "Access-Control-Request-Method",
					"Access-Control-Request-Headers"));
			corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
					"Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
			corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
			return corsConfiguration;
		}
	}
}