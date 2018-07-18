package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.models.Lesson;
import com.example.cs4550summer22018annienero.models.Module;
import com.example.cs4550summer22018annienero.repositories.CourseRepository;
import com.example.cs4550summer22018annienero.repositories.LessonRepository;
import com.example.cs4550summer22018annienero.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge=3600)
public class LessonService {
    @Autowired
    LessonRepository lessonRepository;

    @Autowired
    ModuleRepository moduleRepository;

    @PostMapping("/api/course/{cid}/module/{mid}/lesson")
    public Lesson createLesson(@PathVariable("cid") String cid, @PathVariable("mid") String mid, @RequestBody Lesson lesson) {
        Optional<Module> data = moduleRepository.findById(Integer.parseInt(mid));
        if(data.isPresent()) {
            Module module = data.get();
            lesson.setModule(module);
            return lessonRepository.save(lesson);
        }
        return null;
    }

    @DeleteMapping("/api/lesson/{id}")
    public void deleteLesson(@PathVariable("id") String id) {
        Lesson myLesson = lessonRepository.findById(Integer.parseInt(id)).get();
        lessonRepository.delete(myLesson);
    }

    @GetMapping("/api/lesson")
    public List<Lesson> findAllLessons() {
        return (List<Lesson>) lessonRepository.findAll();
    }

    @GetMapping("/api/lesson/{id}")
    public Lesson findLessonById(@PathVariable("id") String id) {
        return lessonRepository.findById(Integer.parseInt(id)).get();
    }

    @GetMapping("/api/course/{cid}/module/{mid}/lesson")
    public List<Lesson> findAllLessonsForModule(@PathVariable("cid") int cid, @PathVariable("mid") int mid) {
        Optional<Module> data = moduleRepository.findById(mid);
        if(data.isPresent()) {
            Module module = data.get();
            return module.getLessons();
        }
        return null;
    }

    @PutMapping("/api/lesson/{id}")
    public Lesson updateLesson(@PathVariable("id") String id, @RequestBody Lesson lesson) {
        Lesson oldLesson = lessonRepository.findById(Integer.parseInt(id)).get();
        oldLesson.updateLesson(lesson);
        return lessonRepository.save(oldLesson);
    }
}
