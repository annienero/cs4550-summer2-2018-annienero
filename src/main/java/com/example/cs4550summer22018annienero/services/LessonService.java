package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.models.Lesson;
import com.example.cs4550summer22018annienero.repositories.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LessonService {
    @Autowired
    LessonRepository lessonRepository;

    @PostMapping("/api/course/{cid}/module/{mid}/lesson") //TODO how to use cid and mid
    public Lesson createLesson(@PathVariable("cid") String cid, @PathVariable("mid") String mid, @RequestBody Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    @DeleteMapping("/api/lesson/{id}")
    public void deleteLesson(@PathVariable("id") String id) {
        lessonRepository.deleteById(Integer.parseInt(id));
    }

    @GetMapping("/api/lesson")
    public List<Lesson> findAllLessons() {
        return (List<Lesson>) lessonRepository.findAll();
    }

    @GetMapping("/api/lesson/{id}")
    public Lesson findLessonById(@PathVariable("id") String id) {
        return lessonRepository.findById(Integer.parseInt(id)).get();
    }

    @GetMapping("/api/course/{cid}/module/{mid}/lesson") //TODO how to use cid and mid
    public List<Lesson> findAllLessonsForModule(@PathVariable("cid") String cid, @PathVariable("mid") String mid) {
        return (List<Lesson>) lessonRepository.findAll();
    }

    @PutMapping("/api/lesson/{id}")
    public Lesson updateLesson(@PathVariable("id") String id, @RequestBody Lesson lesson) {
        Lesson oldLesson = lessonRepository.findById(Integer.parseInt(id)).get();
        oldLesson.updateLesson(lesson);
        return lessonRepository.save(oldLesson);
    }
}
