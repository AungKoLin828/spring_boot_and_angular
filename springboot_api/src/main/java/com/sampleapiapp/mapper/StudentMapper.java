package com.sampleapiapp.mapper;

import org.mapstruct.Mapper;

import com.sampleapiapp.domain.Student;
import com.sampleapiapp.dto.StudentDTO;

@Mapper(componentModel = "spring", uses = {})
public interface StudentMapper extends EntityMapper<StudentDTO, Student>{

}
