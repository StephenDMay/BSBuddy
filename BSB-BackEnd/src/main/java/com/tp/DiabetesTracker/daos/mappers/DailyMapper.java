package com.tp.DiabetesTracker.daos.mappers;
import com.tp.DiabetesTracker.models.DailyValues;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class DailyMapper implements RowMapper<DailyValues> {

    @Override
    public DailyValues mapRow(ResultSet resultSet, int i) throws SQLException {
        DailyValues daily = new DailyValues();
        daily.setAvgBS(resultSet.getInt("Average Blood Sugar"));
        daily.setTotalCarbs(resultSet.getInt("Daily Total"));

        return daily;
    }
}
