package com.example.cs4550summer22018annienero.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Widget {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    protected int id;
    protected String name;
    protected int widgetOrder;
    protected String text;
    protected String className;
    protected String style;
    protected String width;
    protected String height;
    @ManyToOne
    @JsonIgnore
    protected Lesson lesson;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWidgetOrder() {
        return widgetOrder;
    }

    public void setOrder(int widgetOrder) {
        this.widgetOrder = widgetOrder;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public void updateWidget(Widget widget) {
        //TODO hm
        this.widgetOrder = widget.widgetOrder;

        if (widget.name != null) {
            this.name = widget.name;
        }
        if (widget.text != null) {
            this.text = widget.text;
        }
        if (widget.className != null) {
            this.className = widget.className;
        }
        if (widget.style != null) {
            this.style = widget.style;
        }
        if (widget.height != null) {
            this.height = widget.height;
        }
        if (widget.width != null) {
            this.width = widget.width;
        }
    }
}
