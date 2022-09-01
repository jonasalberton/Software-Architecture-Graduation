package br.com.unibave.controller;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;

@RestController
@RequestMapping("/boletos")
public class BoletoController implements Serializable {

    private static final long serialVersionUID = 1L;

    @PutMapping()
    public String alterar() {
        return "Alterado";
    }

}