package com.example.demo.service.authentication;

import com.example.demo.models.SignInRequest;
import com.example.demo.models.SignUpRequest;
import com.example.demo.service.kafka.KafkaProducerService;
import jakarta.servlet.http.HttpServletRequest;
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

    public void signIn(SignInRequest request) {
        JSONObject jsonObject = new JSONObject(request.toString());
        kafkaProducer.sendMessage("auth", jsonObject.toString());
    }

    public void signUp(SignUpRequest request){
        JSONObject jsonObject = new JSONObject(request.toString());
        kafkaProducer.sendMessage("auth", jsonObject.toString());
    }

    public void logout(){
        kafkaProducer.sendMessage("auth", "Logout");
    }
}
