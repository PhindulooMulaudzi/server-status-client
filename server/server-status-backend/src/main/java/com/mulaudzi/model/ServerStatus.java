package com.mulaudzi.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ServerStatus {
    private String name;
    private String ipAddress;
    private String environment;
    private String status;
}
