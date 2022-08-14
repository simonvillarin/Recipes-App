import { React, useState, useEffect } from 'react';
import Search from '../components/Search.js';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const [dishes, setDishes] = useState([]);
  let params = useParams();

  const getDishes = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=0386ce9e5c044718b7bea7b05be25dc2&tags=${params.query}&number=32`
      );
      const data = await res.json();

      setDishes(data.recipes);
      console.log(data.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDishes();
  }, [params.query]);

  return (
    <>
      <div className="container min-h-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16">
        {dishes.map((dish) => (
          <a href={dish.sourceUrl} target="_blank">
            <div className="relative w-full max-w-[16rem] h-[9rem]">
              <img
                src={dish.image}
                alt={dish.title}
                className="block w-full h-full object-cover"
              />
            </div>
            <p className=" w-[16rem] font-Poppins text-sm sm:text-base text-center mt-2">
              {dish.title}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}

export default SearchResults;
