package com.cognizant.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.info("Application started");

        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (Exception e) {
            logger.error("Error occurred while performing calculation", e);
        }

        logger.warn("This is a warning message");

        logger.info("Application ended");
    }
}