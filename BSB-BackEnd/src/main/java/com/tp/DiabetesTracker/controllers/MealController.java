package com.tp.DiabetesTracker.controllers;


import com.tp.DiabetesTracker.exceptions.InvalidCarbsException;
import com.tp.DiabetesTracker.models.DailyValues;
import com.tp.DiabetesTracker.models.Meal;
import com.tp.DiabetesTracker.services.BloodSugarManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class MealController {

    @Autowired
    BloodSugarManagementService service;

    @PostMapping("/addmeal")
    public ResponseEntity addMeal(@RequestBody Meal toAdd) throws InvalidCarbsException {
        Meal enteredMeal;
        enteredMeal = service.addMeal(toAdd);
        return ResponseEntity.ok(enteredMeal);

    }


    @GetMapping("/dailyvalues")
    public List<DailyValues> dailyValues() {
        return service.getDailyValues();
    }

}
