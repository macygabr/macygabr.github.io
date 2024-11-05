package com.example.demo.controller;


import com.example.demo.service.authentication.AuthenticationService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(JSONObject request) {
        System.out.println("signIn: " + request);
        authenticationService.signIn(request);
        return ResponseEntity.ok("send...");
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(JSONObject request) {
        System.out.println("signUp: " + request);
        authenticationService.signUp(request);
        return ResponseEntity.ok("send...");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        System.out.println("logout");
        authenticationService.logout();
        return ResponseEntity.ok("send...");
    }
}


