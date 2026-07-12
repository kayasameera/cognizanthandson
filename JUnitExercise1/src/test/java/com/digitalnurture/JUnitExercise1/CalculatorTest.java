package com.digitalnurture.JUnitExercise1;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {

        Calculator calculator = new Calculator();

        assertEquals(10, calculator.add(5,5));
    }
}
