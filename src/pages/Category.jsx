import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategories } from "../Api";

import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
  const [meals, setMeals] = React.useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      {" "}
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
