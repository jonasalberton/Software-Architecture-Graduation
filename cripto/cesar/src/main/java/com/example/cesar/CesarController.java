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
    public String encrypt(@RequestBody() Body body) {
        Cesar cesar = new Cesar();
        return Cesar.encrypt(body.message);
    }

    @PostMapping("decrypt")
    public String decrypt(@RequestBody() Body body) {
        Cesar cesar = new Cesar();
        return Cesar.decrypt(body.message);
    }
}
