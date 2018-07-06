package com.example.cs4550summer22018annienero.services;

import java.util.List;

import com.example.cs4550summer22018annienero.models.User;
import com.example.cs4550summer22018annienero.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserService {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/user")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/api/user")
    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/api/user/id")
    public User findUserById() {
        return new User();
    }

    @DeleteMapping("/api/user/id")
    public void deleteUser() {
        userRepository.delete(null);
    }
}