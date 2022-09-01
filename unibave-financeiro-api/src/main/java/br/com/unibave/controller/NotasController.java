package br.com.unibave.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;

@RestController
@RequestMapping("/notas")
public class NotasController implements Serializable {

    private static final long serialVersionUID = 1L;

    @PostMapping("/lancar")
    public String lancar() {
        return "lancar";
    }

}