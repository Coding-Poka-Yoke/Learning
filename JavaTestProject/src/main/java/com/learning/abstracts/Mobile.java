package com.learning.abstracts;

public class Mobile {

	public static void main(String[] args) {
		Apple apple = new Apple(100000, "Gold", "Apple Gold 10");
		Samsung samsung = new Samsung(70000, "Black", "Samsung Black 7");
		System.out.println("Apple => " + apple.toString());
		System.out.println("Samsung => " + samsung.toString());
	}
	
}
