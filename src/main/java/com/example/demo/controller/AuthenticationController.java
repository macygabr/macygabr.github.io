package com.example.demo.controller;

import java.util.Optional;
import java.util.Map;
import java.util.HashMap;


import com.example.demo.service.kafka.KafkaProducerService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.demo.models.*;
import com.example.demo.service.email.*;
import com.example.demo.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.servlet.http.HttpServletRequest;

import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final UserRepository userRepository;
    private final EmailService emailService;
    private final KafkaProducerService kafkaProducer;

    @Autowired
    public AuthenticationController(UserRepository userRepository, EmailService emailService,KafkaProducerService kafkaProducer) {
        this.emailService = emailService;
        this.userRepository = userRepository;
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<?> SignUp(@RequestBody SignUpRequest signUpRequest) {
        System.out.println("\033[33m SignUp: " + "start"+ "\033[0m");
        if(userRepository.findByEmail(signUpRequest.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }

        emailService.setFirstName(signUpRequest.getFirstName());
        emailService.setLastName(signUpRequest.getLastName());
        emailService.setEmail(signUpRequest.getEmail());
        emailService.setPassword(signUpRequest.getPassword());

        emailService.sendConfirmationEmail();
        return ResponseEntity.ok().body("Success");
    }

    @PostMapping("/auth/signin")
    public ResponseEntity<?> signIn(@RequestBody SignInRequest signInRequest) {
        String email = signInRequest.getEmail();
        String password = signInRequest.getPassword();
        System.out.println("\033[33m signInRequest(email): " + email + "\033[0m");

        Optional<User> users = userRepository.findByEmail(email);

        if (users.isPresent() && users.get().getPass().equals(password)) {
            User user = users.get();
            Map<String, String> response = generateToken();
            if (user.getToken() != null && !user.getToken().isEmpty()) {
                response.put("token", user.getToken());
            }
            user.setToken(response.get("token"));
            userRepository.save(user);
            System.out.println("\033[33m signInRequest(status): succses\033[0m");
            return ResponseEntity.ok().body(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not found user");
        }
    }

    @PostMapping("/auth/confirm")
    public ResponseEntity<?> confirmEmail(@RequestBody Map<String, String> token_map) {
        String token = token_map.get("check_token");
        System.out.println("\033[34mconfirm(token_map): " + token_map + "\033[0m");
        System.out.println("\033[34mconfirm(token): " + token + "\033[0m");
        System.out.println("\033[34mconfirm(token): " + emailService.getToken() + "\033[0m");
        if(!token.equals(emailService.getToken())) {
            return ResponseEntity.ok().body("Invalid token");
        }

        emailService.setToken(null);
        System.out.println("\033[34mconfirm(status): succses\033[0m");

        try {
            User user = new User();
            user.setFirstName(emailService.getFirstName());
            user.setLastName(emailService.getLastName());
            user.setEmail(emailService.getEmail());
            user.setPass(emailService.getPassword());

            Map<String, String> response = generateToken();
            user.setToken(response.get("token"));

            userRepository.save(user);
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not found user");
        }
    }

    private Map<String, String> generateToken() {
        Map<String, String> response = new HashMap<>();
        response.put("token", UUID.randomUUID().toString());
        response.put("token_name", "custom-auth-token");
        return response;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SignUpRequest {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SignInRequest {
        private String email;
        private String password;
    }
}