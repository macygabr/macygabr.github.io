package com.example.demo.service.kafka;

import com.example.demo.models.SignInRequest;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import org.json.JSONObject;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "auth", groupId = "auth-service")
    public void consumeMessage(String message) {
        System.out.println("\033[31mMessage: <<" + message + ">> topics = auth \033[0m");

        SignInRequest signInRequest = new SignInRequest();

        try{
            JSONObject jsonObject = new JSONObject(message);
            signInRequest.setEmail(jsonObject.optString("email"));
            signInRequest.setPassword(jsonObject.optString("password"));
        } catch (Exception e){
            System.err.println(e.getMessage());
            return;
        }

        System.out.println("Save: " + signInRequest);
    }
}
