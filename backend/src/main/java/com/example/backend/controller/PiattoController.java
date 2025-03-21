package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Piatto;
import com.example.backend.repository.PiattoRepository;

import java.util.List;

@RestController
@RequestMapping("/piatti")
public class PiattoController {
    private final PiattoRepository piattoRepository;

    public PiattoController(PiattoRepository piattoRepository) {
        this.piattoRepository = piattoRepository;
    }

    @GetMapping
    public List<Piatto> getAllPiatto() {
        return piattoRepository.findAll();
    }

    @PostMapping
    public Piatto createPiatto(@RequestBody Piatto piatto) {
        return piattoRepository.save(piatto);
    }

    @DeleteMapping("/{id}")
    public void deletePiatto(@PathVariable Long id) {
        piattoRepository.deleteById(id);
    }
} 
    

