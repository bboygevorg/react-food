import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../Api";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

const Home = () => {
  const [catalog, setCatalog] = React.useState([]);
  const [filteredCatalog, setFilteredCatalog] = React.useState([]);

  const { pathname, search } = useLocation();
  const { push } = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  React.useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};

export default Home;
