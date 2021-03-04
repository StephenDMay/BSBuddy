package com.tp.DiabetesTracker.daos;

import com.tp.DiabetesTracker.models.Meal;

import java.util.List;

public interface MealDao {
    Meal addMeal(Meal toAdd);

    List<Integer> getDailyCarbs();
}
