package com.codingdojo.javaangular.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.javaangular.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{}
