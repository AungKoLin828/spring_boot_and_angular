package com.sampleapiapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sampleapiapp.dto.StudentDTO;
import com.sampleapiapp.service.StudentService;

@RestController
@RequestMapping("/sample/api/student")
@CrossOrigin("*")
public class StudentController {

	private final StudentService studentService;
	
	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@PostMapping("/add")
	public StudentDTO saveStudent(@RequestBody StudentDTO student) {
		return studentService.save(student);
	}

	@GetMapping("/list-all")
	public List<StudentDTO> listAllStudent() {
		return studentService.findALl();
	}

	@GetMapping("/{id}")
	public Optional<StudentDTO> listStudentById(@PathVariable("id") Long id) {
		return studentService.findOne(id);
	}

	@PutMapping("/update")
	public Optional updateStudent(@RequestBody StudentDTO student) {
		return studentService.partialUpdate(student);
	}
	
	@DeleteMapping("/{id}")
	public void deleteStudent(@PathVariable("id") Long id) {
		studentService.delete(id);
	} 

}
