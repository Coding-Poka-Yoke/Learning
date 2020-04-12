package com.learning.encapsulation;

public class Encapsulate {

	private String contributorName;
	private String[] conceptsName;
	private int numOfConceptsCovered;

	public String getName() {
		return contributorName;
	}

	public String[] getConcepts() {
		return conceptsName;
	}

	public int getCovered() {
		return numOfConceptsCovered;
	}

	public void setName(String name) {
		contributorName = name;
	}

	public void setConcepts(String[] concepts) {
		conceptsName = new String[concepts.length];
		for(int i = 0; i < concepts.length; i++) {
			conceptsName[i] = concepts[i];
		}
	}

	public void setCovered(int covered) {
		numOfConceptsCovered = covered;
	}
	
}
