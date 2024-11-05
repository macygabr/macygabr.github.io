package com.example.demo.сontroller;

import com.example.demo.models.SignInRequest;
import com.example.demo.service.kafka.KafkaProducerService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final KafkaProducerService kafkaProducer;

    @Autowired
    public AuthController(KafkaProducerService kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody SignInRequest request) {
        System.out.println("Запрос signin: " + request.toString());
        JSONObject jsonObject = new JSONObject(request.toString());
        kafkaProducer.sendMessage("auth", jsonObject.toString());
        return ResponseEntity.ok("send...");
    }
}


