package com.tp.DiabetesTracker.services;

import com.tp.DiabetesTracker.daos.*;
import com.tp.DiabetesTracker.exceptions.*;
import com.tp.DiabetesTracker.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BloodSugarManagementService {

    @Autowired
    BloodSugarRecordDao dao;

    @Autowired
    PersonalInfoDao piDao;

    @Autowired
    InsulinRatioDao RatioDao;


    @Autowired
    MealDao mealdao;

    public BloodSugarRecord addBloodSugar(BloodSugarRecord bg) throws InvalidLabelException, InvalidBSValueException {
        return dao.addBloodSugar(bg);
    }

    public Meal addMeal(Meal toAdd) {
        return mealdao.addMeal(toAdd);
    }

    public List<BloodSugarRecord> getAllRecords() {
        return dao.getAllRecords();
    }

    public PersonalInfo addInfo(PersonalInfo toAdd) throws InvalidMinBSException, InvalidNameException, InvalidWeightException, InvalidMaxBSException, InvalidHeightException {
        return piDao.addInfo(toAdd);
    }

    public InsulinRatio addRatio(InsulinRatio toAdd) throws InvalidTimeException, InvalidRatioValueException {
        return RatioDao.addRatio(toAdd);
    }

    public List<InsulinRatio> getAllRatios() { return RatioDao.getAllRatios();
    }


    public PersonalInfo editInfo(PersonalInfo toEdit) throws InvalidWeightException { return piDao.editWeight(toEdit);
    }


    public List<BloodSugarRecord> getRecordByDate() {
        return dao.getRecordsByDate();
    }

    public List<PersonalInfo> getInfo() {
        return piDao.getInfo();
    }


    public List<Integer> getDailyCarbs() {
        return mealdao.getDailyCarbs();
    }
}
