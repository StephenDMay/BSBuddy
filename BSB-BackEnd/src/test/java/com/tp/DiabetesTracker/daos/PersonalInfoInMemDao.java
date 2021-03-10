package com.tp.DiabetesTracker.daos;

import com.tp.DiabetesTracker.exceptions.*;
import com.tp.DiabetesTracker.models.PersonalInfo;

import java.util.List;

public class PersonalInfoInMemDao implements PersonalInfoDao {
    @Override
    public PersonalInfo addInfo(PersonalInfo toAdd) throws InvalidNameException, InvalidHeightException, InvalidWeightException, InvalidMinBSException, InvalidMaxBSException {
        return null;
    }

    @Override
    public PersonalInfo editWeight(PersonalInfo toEdit) throws InvalidWeightException {
        return null;
    }

    @Override
    public PersonalInfo editHeight(PersonalInfo toEdit) throws InvalidHeightException {
        return null;
    }

    @Override
    public List<PersonalInfo> getInfo() {
        return null;
    }
}
