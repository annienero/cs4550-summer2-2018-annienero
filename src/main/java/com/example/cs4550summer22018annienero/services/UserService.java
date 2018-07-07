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
        // TODO how do i parse the path
        // how do i jsonify the user... what even should be the signature of this method
        return userRepository.findById(0).get();
    }

    @PutMapping("/api/user/id")
    public void updateUser(@RequestBody User user) {
        //userRepository.what(id, user);
        // oh wait can i mutate things if so then
        // User myUser = userRepository.findById(0).get();
        // myUser.allthefields = user.fields
        // prob make a method in user to do this?????????

    }

    @DeleteMapping("/api/user/id")
    public void deleteUser() {
        //TODO parse
        User myUser = userRepository.findById(0).get();
        userRepository.delete(myUser);
    }
}