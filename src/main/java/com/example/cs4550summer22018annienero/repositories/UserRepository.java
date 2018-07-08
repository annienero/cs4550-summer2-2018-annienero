package com.example.cs4550summer22018annienero.repositories;


import com.example.cs4550summer22018annienero.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    //TODO these need parameters? how/where do i even implement?
    User findUserByUsername();
    User findUserByUsernameAndPassword();
}
