package com.tp.DiabetesTracker.daos.mappers;
import com.tp.DiabetesTracker.models.Meal;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public  class MealMapper implements RowMapper<Meal> {

    @Override
    public Meal mapRow(ResultSet resultSet, int i) throws SQLException {
        Meal mappedMeal = new Meal();
        mappedMeal.setMealId(resultSet.getInt("MealId"));
        mappedMeal.setCarbs(resultSet.getInt("Total Carbs"));
        mappedMeal.setDate(String.valueOf(resultSet.getDate("Date")));
        mappedMeal.setLabel(resultSet.getString("Label"));

        return mappedMeal;
    }


}
