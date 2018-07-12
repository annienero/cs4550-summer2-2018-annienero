package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ModuleService {

    @Autowired
    ModuleRepository moduleRepository;
}
