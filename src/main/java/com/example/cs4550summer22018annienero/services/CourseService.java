package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
}
