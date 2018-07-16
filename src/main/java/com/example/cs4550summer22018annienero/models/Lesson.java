package com.example.cs4550summer22018annienero.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Lesson {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String title;
    @ManyToOne
    @JsonIgnore
    private Module module;

    public void updateLesson(Lesson lesson) {
        if (lesson.title != null && lesson.title != "") {
            this.title = lesson.title;
        }
        if (lesson.module != null) {
            this.module = lesson.module;
        }
    }
}
