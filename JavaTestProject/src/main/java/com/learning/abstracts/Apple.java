package com.learning.abstracts;

public class Apple extends MobilePhone {

	String modelName;
	
	public Apple(int price, String color, String modelName) {
		super(price, color);
		this.modelName = modelName;
	}
	
	@Override
	String getModel() {
		return modelName;
	}
	
	@Override
	public String toString() {
		return "Model : " + modelName + ", Color : " + super.getcolor() + ", Price : " + super.getPrice();
	}
	
}
