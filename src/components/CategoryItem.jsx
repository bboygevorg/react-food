import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} />
          <span className="card-title">{strCategory}</span>
        </div>
        <div className="card-content">
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-action">
          <Link to={`/category/${strCategory}`} className="btn">
            Watch category
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
