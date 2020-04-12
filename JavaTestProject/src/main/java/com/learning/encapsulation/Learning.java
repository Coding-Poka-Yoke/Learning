package com.learning.encapsulation;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Learning {

	private Encapsulate encap;

	public Map<String, Object> getData() {
		String name = encap.getName();
		String[] concepts = encap.getConcepts();
		int covered = encap.getCovered();
		printData(name, concepts, covered);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("Name", name);
		map.put("Concepts", concepts);
		map.put("Covered", covered);
		return map;
	}

	public static void printData(String name, String[] concepts, int covered) {
		System.out.println(name);
		System.out.println(Arrays.toString(concepts));
		System.out.println(covered);
	}

	public void setData(String name, String[] concepts, int covered) {
		encap.setName(name);
		encap.setConcepts(concepts);
		encap.setCovered(covered);
	}

	public void setObj() {
		encap = new Encapsulate(); 
	}

	public static void main(String[] args) {
		Learning learning = new Learning();
		learning.setObj();
		learning.setData("Pikachu", new String[] {"C++", "Java"}, 2);
		learning.getData();
	}
	
}
