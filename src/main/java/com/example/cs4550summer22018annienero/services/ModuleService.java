package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.models.Course;
import com.example.cs4550summer22018annienero.models.Module;
import com.example.cs4550summer22018annienero.repositories.CourseRepository;
import com.example.cs4550summer22018annienero.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge=3600)
public class ModuleService {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    ModuleRepository moduleRepository;

    @PostMapping("/api/course/{cid}/module")
    public Module createModule(@PathVariable("cid") String cid, @RequestBody Module module) {
        Optional<Course> data = courseRepository.findById(Integer.parseInt(cid));
        if(data.isPresent()) {
            Course course = data.get();
            module.setCourse(course);
            return moduleRepository.save(module);
        }
        return null;
    }


    @DeleteMapping("/api/module/{id}")
    public void deleteModule(@PathVariable("id") String id) {
        Module myModule = moduleRepository.findById(Integer.parseInt(id)).get();
        moduleRepository.delete(myModule);
    }

    @GetMapping("/api/module/{id}")
    public Module findModuleById(@PathVariable("id") String id) {
        return moduleRepository.findById(Integer.parseInt(id)).get();
    }

    @PutMapping("/api/module/{id}")
    public Module updateModule(@PathVariable("id") String id, @RequestBody Module module) {
        Module oldModule = moduleRepository.findById(Integer.parseInt(id)).get();
        oldModule.updateModule(module);
        return moduleRepository.save(oldModule);
    }

    @GetMapping("/api/course/{courseId}/module")
    public List<Module> findAllModulesForCourse(@PathVariable("courseId") int courseId) {
        Optional<Course> data = courseRepository.findById(courseId);
        if(data.isPresent()) {
            Course course = data.get();
            return course.getModules();
        }
        return null;
    }

}
