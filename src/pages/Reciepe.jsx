import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../Api";
import Preloader from "../components/Preloader";

const Reciepe = (props) => {
  const [reciepe, setReciepe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setReciepe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!reciepe.idMeal ? (
        <Preloader />
      ) : (
        <div className="reciepe">
          <img src={reciepe.strMealThumb} alt={reciepe.strMeal} />
          <h1>{reciepe.strMeal}</h1>
          <h6>Category: {reciepe.strCategory}</h6>
          {reciepe.strArea ? <h6>Area: {reciepe.strArea}</h6> : null}
          <p>{reciepe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(reciepe).map((key) => {
                if (key.includes("Ingredient") && reciepe[key]) {
                  return (
                    <tr key={key}>
                      <td>{reciepe[key]}</td>
                      <td>{reciepe[`strMeasure${key.slice(13)}`]} </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
};

export default Reciepe;
