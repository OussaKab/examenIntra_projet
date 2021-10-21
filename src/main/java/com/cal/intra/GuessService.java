package com.cal.intra;

import com.cal.intra.model.Guess;
import com.cal.intra.repository.GuessRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuessService {

    private final GuessRepository guessRepository;

    public GuessService(GuessRepository guessRepository){
        this.guessRepository = guessRepository;
    }

    public List<Guess> getAll(){
        return guessRepository.findAll();
    }

    public Guess create(Guess guess){
        return guessRepository.save(guess);
    }
}
