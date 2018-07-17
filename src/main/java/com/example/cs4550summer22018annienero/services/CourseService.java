package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.models.Course;
import com.example.cs4550summer22018annienero.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge=3600)
public class CourseService {
    @Autowired
    CourseRepository courseRepository;

    @GetMapping("/api/course")
    public List<Course> findAllLessons() {
        return (List<Course>) courseRepository.findAll();
    }

    @PostMapping("/api/course")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }
}
