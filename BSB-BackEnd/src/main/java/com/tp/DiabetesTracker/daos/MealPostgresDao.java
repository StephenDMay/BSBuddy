package com.tp.DiabetesTracker.daos;

import com.tp.DiabetesTracker.daos.mappers.IntegerMapper;
import com.tp.DiabetesTracker.models.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Profile("production")
public class MealPostgresDao implements MealDao{

    @Autowired
    private JdbcTemplate template;


    @Override
    public Meal addMeal(Meal toAdd) {
        Integer mealId = template.queryForObject(
                "INSERT INTO public.\"Meals\"(\n" +
                        "\t \"Total Carbs\", \"Date\", \"Label\")\n" +
                        "\tVALUES (?, CURRENT_DATE, ?);",
                new IntegerMapper("MealId"),
                toAdd.getCarbs(),
                toAdd.getLabel());

        toAdd.setMealId(mealId);

        return toAdd;

    }

    @Override
    public List<Integer> getDailyCarbs() {
        List<Integer> dailyCarbs = template.query("SELECT * FROM public.\"Daily Carbs\"",
                new IntegerMapper("Daily Carbs"));

        return dailyCarbs;
    }
}
