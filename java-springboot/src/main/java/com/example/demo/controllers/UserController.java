package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/usuarios")
public class UserController{
    
    @GetMapping
    public String listarUsuarios(){
        return " Lista dos usuários";
    }
}
