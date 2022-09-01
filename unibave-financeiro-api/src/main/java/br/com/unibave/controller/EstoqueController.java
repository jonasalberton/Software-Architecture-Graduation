package br.com.unibave.controller;

import java.io.Serializable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estoque")
public class EstoqueController implements Serializable{

    private static final long serialVersionUID = 1L;

    @PostMapping()
    public String processar() {
        return "Teste";
    }

}
