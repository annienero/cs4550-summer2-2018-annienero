package com.example.cs4550summer22018annienero.repositories;


import com.example.cs4550summer22018annienero.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserByUsername();
    User findUserByUsernameAndPassword();
}
