import React from "react";
import Meal from "./Meal";

const MealList = ({ meals = [] }) => {
  return (
    <div className="list">
      {meals.map((el) => {
        return <Meal key={el.idMeal} {...el} />;
      })}
    </div>
  );
};

export default MealList;
