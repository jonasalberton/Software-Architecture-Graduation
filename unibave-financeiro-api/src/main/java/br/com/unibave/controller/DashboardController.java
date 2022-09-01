package br.com.unibave.controller;

import java.io.Serializable;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@GetMapping("/apresentar")
	public String apresentarDados() {
		return "Teste";
	}

}
