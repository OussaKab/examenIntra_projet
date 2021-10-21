package com.cal.intra.controller;

import com.cal.intra.GuessService;
import com.cal.intra.model.Guess;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guesses")
@CrossOrigin
public class GuessController {


    private final GuessService guessService;

    public GuessController(GuessService guessService) {
        this.guessService = guessService;
    }

    @GetMapping
    public List<Guess> getAll(){
        return guessService.getAll();
    }


    @PostMapping
    public Guess create(@RequestBody Guess guess){
        return guessService.create(guess);
    }
}
