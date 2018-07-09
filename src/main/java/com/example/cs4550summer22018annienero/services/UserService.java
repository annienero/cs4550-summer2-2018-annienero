package com.example.cs4550summer22018annienero.services;

import java.util.List;

import com.example.cs4550summer22018annienero.models.User;
import com.example.cs4550summer22018annienero.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
public class UserService {

    public static final String USER = "user";

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

    @GetMapping("/api/user/{id}")
    public User findUserById(@PathVariable("id") String id) {
        int userId = Integer.parseInt(id);
        return userRepository.findById(userId).get();
    }

    @PutMapping("/api/user/{id}")
    public void updateUser(@PathVariable("id") String id, @RequestBody User user) {
        int userId = Integer.parseInt(id);
        User newUser = userRepository.findById(userId).get();
        newUser.updateUser(user);
        userRepository.save(newUser);
    }

    @DeleteMapping("/api/user/{id}")
    public void deleteUser(@PathVariable("id") String id) {
        int userId = Integer.parseInt(id);
        User myUser = userRepository.findById(userId).get();
        userRepository.delete(myUser);
    }

    @GetMapping("/api/user/{username}")
    public User findUserByUsername(@PathVariable("username") String username) {
        return userRepository.findUserByUsername(username);
        //TODO Note that you might need to refactor the findAllUsers() method.
        //HUH
    }

    @PostMapping("/api/register")
    public User register(@RequestBody User user, HttpSession session) {
        User myUser = userRepository.findUserByUsername(user.getUsername());
        if (myUser == null) {
            myUser = userRepository.save(user);
            session.setAttribute(USER, myUser);
            return myUser;
        }
        return null;
    }

    @PostMapping("/api/login")
    public User login(@RequestBody User user, HttpSession session) {
        User myUser = userRepository.findUserByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (myUser == null) {
            return null;
        }
        session.setAttribute(USER, myUser);
        return myUser;
    }

    @PutMapping("/api/profile")
    public User updateProfile(@RequestBody User user, HttpSession session) {
        User currentUser = (User) session.getAttribute(USER);
        if (currentUser != null) {
            currentUser.updateUser(user);
            userRepository.save(currentUser);
            session.setAttribute(USER, currentUser);
            return currentUser;
        }
        return null;
    }

    @GetMapping("/api/profile")
    public User getCurrentUser(HttpSession session) {
        //TODO for test
        User user = new User();
        user.setUsername("annie");
        session.setAttribute(USER, user);
        //TODO end test
        return (User) session.getAttribute(USER);
    }

    @PostMapping("/api/logout")
    public User logout(HttpSession session) {
        User currentUser = (User) session.getAttribute(USER);
        session.invalidate();
        return currentUser;
    }

}