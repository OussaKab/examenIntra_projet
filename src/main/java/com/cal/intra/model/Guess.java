package com.cal.intra.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "guesses")
public class Guess {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private int guess_user;
    private int guess_machine;
}
