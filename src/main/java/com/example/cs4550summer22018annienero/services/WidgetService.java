package com.example.cs4550summer22018annienero.services;

import com.example.cs4550summer22018annienero.models.Lesson;
import com.example.cs4550summer22018annienero.models.Widget;
import com.example.cs4550summer22018annienero.repositories.LessonRepository;
import com.example.cs4550summer22018annienero.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    LessonRepository lessonRepository;

    @GetMapping("/api/widget")
    public List<Widget> findAllWidgets() {
        return (List<Widget>) widgetRepository.findAll();
    }

    @PostMapping("/api/lesson/{lessonId}/widget")
    public Widget createWidget(@PathVariable("lessonId") String lessonId, @RequestBody Widget widget) {
        Optional<Lesson> data = lessonRepository.findById(Integer.parseInt(lessonId));
        if(data.isPresent()) {
            Lesson lesson = data.get();
            widget.setLesson(lesson);
            return widgetRepository.save(widget);
        }
        return null;
    }

    @PostMapping("/api/lesson/{lessonId}/widget/save")
    public void saveAllWidgets(@PathVariable("lessonId") String lessonId, @RequestBody List<Widget> widgets) {
        Optional<Lesson> data = lessonRepository.findById(Integer.parseInt(lessonId));
        //if(data.isPresent()) { TODO when care abt individual lesson
            widgetRepository.deleteAll();
            Lesson lesson = data.get();
            for (Widget widget : widgets) {
                widget.setLesson(lesson);
                widgetRepository.save(widget);
            }
       // }

    }

    @GetMapping("/api/widget/{id}")
    public Widget findLessonById(@PathVariable("id") String id) {
        return widgetRepository.findById(Integer.parseInt(id)).get();
    }

    @GetMapping("/api/lesson/{lessonId}/widget")
    public List<Widget> findAllWidgetsForLesson(@PathVariable("lessonId") String lessonId) {
        Optional<Lesson> data = lessonRepository.findById(Integer.parseInt(lessonId));
        if(data.isPresent()) {
            Lesson lesson = data.get();
            return lesson.getWidgets();
        }
        return null;
    }

    @PutMapping("/api/widget/{widgetId}")
    public Widget updateWidget(@PathVariable("widgetId") String widgetId, @RequestBody Widget widget) {
        Widget oldWidget = widgetRepository.findById(Integer.parseInt(widgetId)).get();
        oldWidget.updateWidget(widget);
        return widgetRepository.save(oldWidget);
    }

    @DeleteMapping("/api/widget/{widgetId}")
    public void deleteWidget(@PathVariable("widgetId") String widgetId) {
        widgetRepository.deleteById(Integer.parseInt(widgetId));
    }

}
