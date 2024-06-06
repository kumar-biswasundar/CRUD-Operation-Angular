package com.cglia.controler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cglia.entity.Student;
import com.cglia.exception.ResourceNotFoundException;
import com.cglia.repository.StudentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentControler {
    
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping("/students/{s_id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int s_id) {
        Student student = studentRepository.findById(s_id)
            .orElseThrow(() -> new ResourceNotFoundException("Student not found with s_id: " + s_id));
        
        return ResponseEntity.ok(student);
    }

    @PutMapping("/students/{s_id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int s_id, @RequestBody Student updatedStudent) {
        Student student = studentRepository.findById(s_id)
            .orElseThrow(() -> new ResourceNotFoundException("Student not found with s_id: " + s_id));
        
        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName()); 
        student.setStrem(updatedStudent.getStrem()); 
        
        studentRepository.save(student);
        
        return ResponseEntity.ok(student); 
    }
    @DeleteMapping("/students/{s_id}")
	public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable int s_id){
		Student student = studentRepository.findById(s_id)
				.orElseThrow(() -> new ResourceNotFoundException("Student not exist with s_id :" + s_id));
		
		studentRepository.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
