package com.cglia.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int s_id;
	@Column(name = "first name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "Strem")
	private String strem;
	
	
	
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(int s_id, String firstName, String lastName, String strem) {
		super();
		this.s_id = s_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.strem = strem;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getStrem() {
		return strem;
	}
	public void setStrem(String strem) {
		this.strem = strem;
	}
	
	
}
