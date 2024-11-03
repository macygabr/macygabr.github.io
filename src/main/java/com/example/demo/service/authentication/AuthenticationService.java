package com.example.demo.service.authentication;

import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import org.springframework.stereotype.Service;

@Getter
@Service
public class AuthenticationService {

    public Boolean checkAuthentication(HttpServletRequest request) {
        return false;
    }
}
