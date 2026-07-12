package com.smartportal.library.service;

import com.smartportal.library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void issueBook() {
        System.out.println("Book Service Working");
        repository.display();
    }

}
