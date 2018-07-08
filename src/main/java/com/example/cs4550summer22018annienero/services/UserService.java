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

    @GetMapping("/api/user/id")
    public User findUserById() {
        // TODO how do i parse the path
        // how do i jsonify the user... what even should be the signature of this method
        return userRepository.findById(0).get();
    }

    @PutMapping("/api/user/id")
    public void updateUser(@RequestBody User user) {
        //TODO userRepository.what(id, user);
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

    @GetMapping("/api/user") //TODO is that right path?
    public User findUserByUsername(@RequestBody String username) { //TODO what should be the signature of this method?
        //"parses the username from a query parameter called username" (???????)
        return userRepository.findUserByUsername();

        //TODO Note that you might need to refactor the findAllUsers() method.
        //HUH
    }

    @PostMapping("/api/register")
    public User register(@RequestBody User user, HttpSession session) {
        User myUser = userRepository.findUserByUsername();
        if (myUser == null) {
            userRepository.save(user);
            // TODO add the new user to the session attribute "user" to set the new user as currently logged in
            session.setAttribute(USER, user);
            return user;
        }
        return null;
    }

    @PostMapping("/api/login")
    public User login(@RequestBody User user, HttpSession session) {
        User myUser = userRepository.findUserByUsernameAndPassword();
        if (myUser == null) {
            return null;
        }
        // TODO  add the user to the HTTP session... Save the found user in a session variable called "user"
        session.setAttribute(USER, myUser);
        return myUser;
    }

    @PutMapping("/api/profile")
    public User updateProfile(@RequestBody User user, HttpSession session) {
        User currentUser = (User) session.getAttribute(USER); //TODO is this safe?
        if (currentUser != null) {
            //TODO get their id then update that user based on given one
            // TODO return updated user
        }
        return null;
    }

    @PostMapping("/api/logout")
    public User logout(HttpSession session) {
        User currentUser = (User) session.getAttribute(USER); //TODO safe?
        session.removeAttribute(USER);
        return currentUser;
    }

}