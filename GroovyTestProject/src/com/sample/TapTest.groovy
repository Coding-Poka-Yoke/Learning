package com.sample;

public class TapTest {

	static void main(String[] args) {
		println new TestDTO().tap { 
			name= "Hello"
			description = "World" 
		}.toString()		
		
	}
}

class TestDTO {
	String name
	String description
	
	String toString() {
		name + " " + description
	}
}
