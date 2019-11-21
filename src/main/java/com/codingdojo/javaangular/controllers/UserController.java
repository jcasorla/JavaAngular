package com.codingdojo.javaangular.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.codingdojo.javaangular.models.User;
import com.codingdojo.javaangular.repositories.UserRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
public class UserController {
 
    
     
    private final UserRepository userRepository;
    
    public UserController(UserRepository userRepository) {
		this.userRepository=userRepository;
	}
 
    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }
    
//  //view
//    @RequestMapping("/ideas/{id}")
//    public String view(@PathVariable("id") Long id, Model model, HttpSession session) {
//    	Idea idea=ideaService.findIdea(id);
//    	
//    	User user = userService.findUserById((Long) session.getAttribute("userId")); 
//    	model.addAttribute("idea", idea);
//    	model.addAttribute("user", user);
//        return "/views/viewIdea.jsp";
//    }
    
     //view
    @GetMapping("/users/{id}")
  public Optional<User> view(@PathVariable("id") Long id) {
    	System.out.println(id);
//    	User user=userRepository.findById(id);
    	
    	
    	return  userRepository.findById(id);
//  	Idea idea=ideaService.findIdea(id);
//  	
//  	User user = userService.findUserById((Long) session.getAttribute("userId")); 
//  	model.addAttribute("idea", idea);
//  	model.addAttribute("user", user);
//      return "/views/viewIdea.jsp";
  }
 
    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
    
  //update
    @RequestMapping(value="/users/{id}", method=RequestMethod.PUT) 
    public void updateUser(@RequestBody User user) {
    	userRepository.save(user);
	    
    }
    
    @RequestMapping(value="/users/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
      
        userRepository.deleteById(id);
    }
    
    
}
