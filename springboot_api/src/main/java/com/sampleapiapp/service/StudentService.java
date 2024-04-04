package com.sampleapiapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sampleapiapp.dto.StudentDTO;

public interface StudentService {
	
	StudentDTO save(StudentDTO studentDto);
	
	List<StudentDTO> findALl();
	
	Optional<StudentDTO> findOne(Long id);
	
	Optional<StudentDTO> partialUpdate(StudentDTO studentDto);
	
	void delete(Long id);

}
