package com.example.demo.service.authentication;

import com.example.demo.service.kafka.KafkaProducerService;
import lombok.Getter;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Getter
@Service
public class AuthenticationService {

    private final KafkaProducerService kafkaProducer;

    @Autowired
    public AuthenticationService(KafkaProducerService kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    public void signIn(JSONObject  jsonObject) {
        kafkaProducer.sendMessage("auth", jsonObject.toString());
    }

    public void signUp(JSONObject  jsonObject) {
        kafkaProducer.sendMessage("auth", jsonObject.toString());
    }

    public void logout(){
        kafkaProducer.sendMessage("auth", "Logout");
    }
}
