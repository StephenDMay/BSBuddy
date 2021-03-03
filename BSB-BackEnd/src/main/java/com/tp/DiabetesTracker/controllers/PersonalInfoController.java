package com.tp.DiabetesTracker.controllers;


import com.tp.DiabetesTracker.daos.mappers.BloodSugarMapper;
import com.tp.DiabetesTracker.daos.mappers.PersonalInfoMapper;
import com.tp.DiabetesTracker.exceptions.*;
import com.tp.DiabetesTracker.models.BloodSugarRecord;
import com.tp.DiabetesTracker.models.PersonalInfo;
import com.tp.DiabetesTracker.services.BloodSugarManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonalInfoController {

    @Autowired
    private JdbcTemplate template;

    @Autowired
    BloodSugarManagementService service;

    @PostMapping("/info")
    public ResponseEntity addInfo(@RequestBody PersonalInfo toAdd) {
        PersonalInfo enteredInfo = null;
        try {
            enteredInfo = service.addInfo(toAdd);
        } catch (InvalidMinBSException | InvalidHeightException | InvalidNameException | InvalidWeightException | InvalidMaxBSException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(enteredInfo);
    }

    @PutMapping("/editinfo/{userId}")
    public ResponseEntity editWeight(@RequestBody PersonalInfo toEdit) {
        PersonalInfo editInfo = null;
        try {
            editInfo = service.editInfo(toEdit);
        } catch (InvalidWeightException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(editInfo);
    }

    @GetMapping("/viewinfo")
    public List<PersonalInfo> getInfo() {
        return service.getInfo();
    }
}
