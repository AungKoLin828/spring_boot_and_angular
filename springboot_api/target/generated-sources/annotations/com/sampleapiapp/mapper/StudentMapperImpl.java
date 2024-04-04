package com.sampleapiapp.mapper;

import com.sampleapiapp.domain.Student;
import com.sampleapiapp.dto.StudentDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-03-09T23:30:07+0630",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 17.0.1 (Eclipse Adoptium)"
)
@Component
public class StudentMapperImpl implements StudentMapper {

    @Override
    public Student toEntity(StudentDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Student student = new Student();

        student.setId( dto.getId() );
        student.setName( dto.getName() );
        student.setAge( dto.getAge() );
        student.setAddress( dto.getAddress() );
        student.setPhoneNo( dto.getPhoneNo() );

        return student;
    }

    @Override
    public StudentDTO toDto(Student entity) {
        if ( entity == null ) {
            return null;
        }

        StudentDTO studentDTO = new StudentDTO();

        studentDTO.setId( entity.getId() );
        studentDTO.setName( entity.getName() );
        studentDTO.setAge( entity.getAge() );
        studentDTO.setAddress( entity.getAddress() );
        studentDTO.setPhoneNo( entity.getPhoneNo() );

        return studentDTO;
    }

    @Override
    public List<Student> toEntity(List<StudentDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Student> list = new ArrayList<Student>( dtoList.size() );
        for ( StudentDTO studentDTO : dtoList ) {
            list.add( toEntity( studentDTO ) );
        }

        return list;
    }

    @Override
    public List<StudentDTO> toDto(List<Student> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<StudentDTO> list = new ArrayList<StudentDTO>( entityList.size() );
        for ( Student student : entityList ) {
            list.add( toDto( student ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Student entity, StudentDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getName() != null ) {
            entity.setName( dto.getName() );
        }
        entity.setAge( dto.getAge() );
        if ( dto.getAddress() != null ) {
            entity.setAddress( dto.getAddress() );
        }
        if ( dto.getPhoneNo() != null ) {
            entity.setPhoneNo( dto.getPhoneNo() );
        }
    }
}
