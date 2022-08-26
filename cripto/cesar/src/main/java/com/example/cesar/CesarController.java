package com.example.cesar;

import org.apache.logging.log4j.message.Message;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cesar")
public class CesarController {

    @PostMapping("encrypt")
    public Body encrypt(@RequestBody() Body body) {
        Cesar cesar = new Cesar();
        Body response = new Body();
        response.message = Cesar.encrypt(body.message);
        return response;
    }

    @PostMapping("decrypt")
    public Body decrypt(@RequestBody() Body body) {
        Cesar cesar = new Cesar();
        Body response = new Body();
        response.message = Cesar.decrypt(body.message);
        return response;
    }
}
