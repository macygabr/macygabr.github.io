package com.example.demo.models;

import lombok.Data;

@Data
public class SignInRequest {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}

