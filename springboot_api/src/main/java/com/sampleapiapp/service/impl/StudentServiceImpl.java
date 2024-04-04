package com.sampleapiapp.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.sampleapiapp.domain.Student;
import com.sampleapiapp.dto.StudentDTO;
import com.sampleapiapp.mapper.StudentMapper;
import com.sampleapiapp.repository.StudentRepository;
import com.sampleapiapp.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	private final StudentMapper studentMapper;

	private final  StudentRepository studentRepository;

	public StudentServiceImpl(StudentMapper studentMapper, StudentRepository studentRepository) {
		this.studentMapper = studentMapper;
		this.studentRepository = studentRepository;
	}

	@Override
	public StudentDTO save(StudentDTO studentDto) {
		// TODO Auto-generated method stub
		Student student = studentMapper.toEntity(studentDto);
		student = studentRepository.save(student);
		return studentMapper.toDto(student);
	}

	@Override
	public List<StudentDTO> findALl() {
		// TODO Auto-generated method stub
		return studentRepository.findAll().stream().map(studentMapper::toDto)
				.collect(Collectors.toCollection(LinkedList::new));
	}

	@Override
	public Optional<StudentDTO> findOne(Long id) {
		// TODO Auto-generated method stub
		return studentRepository.findById(id).map(studentMapper::toDto);
	}

	@Override
	public Optional<StudentDTO> partialUpdate(StudentDTO studentDto) {
		// TODO Auto-generated method stub
		return studentRepository.findById(studentDto.getId())
				.map(extstStudent -> {
					studentMapper.partialUpdate(extstStudent, studentDto);
					return extstStudent;
				}
			)
			.map(studentRepository::save)
			.map(studentMapper::toDto);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		studentRepository.deleteById(id);
	}

}
