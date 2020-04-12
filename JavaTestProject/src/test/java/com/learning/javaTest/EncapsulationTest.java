package com.learning.javaTest;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.learning.encapsulation.Learning;

@SpringBootTest
class EncapsulationTest {

	Learning learning = new Learning();

	String name = "Pikachu";
	String[] concepts = new String[] { "C++", "Java" };
	int covered = 2;
	String nameFail = "Pika";
	String[] conceptsFail = new String[] { "Java", "C++" };
	int coveredFail = 1;

	@Test
	void testEncap() {
		learning.setObj();
		setData();
		getData();
	}

	void setData() {
		learning.setData(name, concepts, covered);
	}

	void getData() {
		Map<String, Object> map = learning.getData();
		assertSuccess(map);
		assertFail(map);
	}

	void assertSuccess(Map<String, Object> map) {
		assertEquals(map.get("Name"), name);
		assertArrayEquals((String[]) map.get("Concepts"), concepts);
		assertEquals(map.get("Covered"), covered);
	}

	void assertFail(Map<String, Object> map) {
		assertNotEquals(map.get("Name"), nameFail);
		assertNotEquals((String[]) map.get("Concepts"), conceptsFail);
		assertNotEquals(map.get("Covered"), coveredFail);
	}

}
