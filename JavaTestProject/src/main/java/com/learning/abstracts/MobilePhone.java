package com.learning.abstracts;

public abstract class MobilePhone {

	String color;
	int price;
	
	public MobilePhone(int price, String color) {
		this.price = price;
		this.color = color;
	}
	
	public int getPrice() {
		return price;
	}
	
	public String getcolor() {
		return color;
	}
	
	abstract String getModel();
	
	public abstract String toString();
	
}
