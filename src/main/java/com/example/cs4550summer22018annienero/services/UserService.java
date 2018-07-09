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
        //TODO userRepository.what(userId, user);
        // oh wait can i mutate things if so then
        // User myUser = userRepository.findById(userId).get();
        // myUser.allthefields = user.fields
        // prob make a method in user to do this?????????

    }

    @DeleteMapping("/api/user/{id}")
    public void deleteUser(@PathVariable("id") String id) {
        int userId = Integer.parseInt(id);
        User myUser = userRepository.findById(userId).get();
        userRepository.delete(myUser);
    }

    @GetMapping("/api/user") //TODO is that right path?
    public User findUserByUsername(@RequestBody User user) { //TODO what should be the signature of this method?
        //"parses the username from a query parameter called username" (???????)
        return userRepository.findUserByUsername(user.getUsername());

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
            //TODO update currentUser.updateUser(user);
            userRepository.save(currentUser);
            session.setAttribute(USER, currentUser);
            // TODO return updated user
        }
        return null;
    }

    @PostMapping("/api/logout")
    public User logout(HttpSession session) {
        User currentUser = (User) session.getAttribute(USER);
        session.invalidate();
        return currentUser;
    }

}