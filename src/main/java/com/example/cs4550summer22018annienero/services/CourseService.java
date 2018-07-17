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
    public List<Course> findAllCourses() {
        return (List<Course>) courseRepository.findAll();
    }

    @PostMapping("/api/course")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @DeleteMapping("/api/course/{id}")
    public void deleteCourse(@PathVariable("id") String id) {
        Course myCourse = courseRepository.findById(Integer.parseInt(id)).get();
        courseRepository.delete(myCourse);
    }

    @GetMapping("/api/course/{id}")
    public Course findCourseById(@PathVariable("id") String id) {
        return courseRepository.findById(Integer.parseInt(id)).get();
    }

    @PutMapping("/api/course/{id}")
    public Course updateCourse(@PathVariable("id") String id, @RequestBody Course course) {
        Course oldCourse = courseRepository.findById(Integer.parseInt(id)).get();
        oldCourse.updateCourse(course);
        return courseRepository.save(oldCourse);
    }

}
