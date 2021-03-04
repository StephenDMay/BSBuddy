package com.tp.DiabetesTracker.models;


import java.time.LocalDate;

public class BloodSugarRecord {

    Integer bsValueId;
    Integer bsValue;
    String label;
    String date;
    String time;


    public String getDate() {
        return date;
    }

    public void setDate(String date) { this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }


    public BloodSugarRecord() {
        LocalDate date = LocalDate.now();
    }

    public BloodSugarRecord(BloodSugarRecord toAdd) {
    }


    public Integer getbsValueId() {
        return bsValueId;
    }

    public void setbsValueId(Integer bsValueId) {
        this.bsValueId = bsValueId;
    }

    public Integer getbsValue() {
        return bsValue;
    }

    public void setbsValue(Integer bsValue) {
        this.bsValue = bsValue;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }






}
