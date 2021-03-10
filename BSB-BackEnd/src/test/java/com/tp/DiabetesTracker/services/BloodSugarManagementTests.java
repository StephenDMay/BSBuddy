package com.tp.DiabetesTracker.services;

import com.tp.DiabetesTracker.exceptions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import com.tp.DiabetesTracker.models.BloodSugarRecord;
import com.tp.DiabetesTracker.models.PersonalInfo;
import com.tp.DiabetesTracker.daos.BloodSugarRecordDao;
import com.tp.DiabetesTracker.daos.BloodSugarRecordInMemDao;
import com.tp.DiabetesTracker.daos.PersonalInfoInMemDao;
import com.tp.DiabetesTracker.daos.PersonalInfoDao;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;


@SpringBootTest
@ActiveProfiles("serviceTest")
public class BloodSugarManagementTests {

    @Autowired
    BloodSugarManagementService toTest;

    @Autowired
    JdbcTemplate template;

    public void addRecord() throws InvalidLabelException, InvalidBSValueException {
        BloodSugarRecord record1 = new BloodSugarRecord();

        record1.setbsValueId(1);
        record1.setbsValue(100);
        record1.setLabel("Before Breakfast");
        toTest.dao.addBloodSugar(record1);

        BloodSugarRecord record2 = new BloodSugarRecord();

        record2.setbsValueId(2);
        record2.setbsValue(250);
        record2.setLabel("After Dinner");
        toTest.dao.addBloodSugar(record2);

    }

    public void addInfo() throws InvalidMinBSException, InvalidNameException, InvalidWeightException, InvalidMaxBSException, InvalidHeightException {
        PersonalInfo info = new PersonalInfo();

        info.setName("Bob");
        info.setWeight(150);
        info.setHeight(58);
        info.setMinBS(85);
        info.setMaxBS(160);
        toTest.piDao.addInfo(info);
    }


    @BeforeEach
    public void setup() {
        toTest.dao = new BloodSugarRecordInMemDao();
        toTest.piDao = new PersonalInfoInMemDao();

        BloodSugarRecord record = new BloodSugarRecord();
        record.setbsValueId(3);
        record.setbsValue(85);
        record.setLabel("Before Snack");

        try {
            toTest.dao.addBloodSugar(record);
        } catch (InvalidLabelException | InvalidBSValueException e) {
            fail();
        }


    }

    @Test
    public void testAddRecordGoldenPath() {
        BloodSugarRecord record = new BloodSugarRecord();
        record.setbsValue(140);
        record.setLabel("After lunch");

        BloodSugarRecord returned = null;
        try {
            returned = toTest.addBloodSugar(record);
        } catch (InvalidLabelException | InvalidBSValueException e) {
            fail();
        }

        assertEquals(2, returned.getbsValueId());
        assertEquals(140, returned.getbsValue());
        assertEquals("After lunch", returned.getLabel());

        List<BloodSugarRecord> allRecords = toTest.getAllRecords();

        assertEquals(2, allRecords.get(1).getbsValueId());
        assertEquals(140, allRecords.get(1).getbsValue());
        assertEquals("After lunch", allRecords.get(1).getLabel());
    }

    @Test
    public void testAddRecordNullValue() {
        BloodSugarRecord record = new BloodSugarRecord();
        record.setbsValue(null);
        record.setLabel("Snack");
        assertThrows(InvalidBSValueException.class, () -> toTest.addBloodSugar(record));
    }

    @Test
    public void testAddRecordNullLabel() {
        BloodSugarRecord record = new BloodSugarRecord();
        record.setbsValue(100);
        record.setLabel(null);
        assertThrows(InvalidLabelException.class, () -> toTest.addBloodSugar(record));
    }

    @Test
    public void testGetAllRecords() {
        List<BloodSugarRecord> records = toTest.getAllRecords();

        assertEquals(2, records.size());


    }

}
