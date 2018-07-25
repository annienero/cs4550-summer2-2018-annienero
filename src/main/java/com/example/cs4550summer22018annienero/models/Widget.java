package com.example.cs4550summer22018annienero.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Widget {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String name;
    private int widgetOrder;
    private String text;
    private String className;
    private String style;
    private String width;
    private String height;
    private String src;
    private String href;
    private ListType listType;
    private int size;

    @ManyToOne
    @JsonIgnore
    private Lesson lesson;

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

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public ListType getListType() {
        return listType;
    }

    public void setListType(ListType listType) {
        this.listType = listType;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public void updateWidget(Widget widget) {
        this.widgetOrder = widget.widgetOrder;
        this.size = widget.size;
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
        if (widget.src != null) {
            this.src = widget.src;
        }
        if (widget.href != null) {
            this.href = widget.href;
        }
        if (widget.listType != null) {
            this.listType = widget.listType;
        }
    }

}
