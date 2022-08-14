import { React, useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function French() {
  const [dishes, setDishes] = useState([]);

  const getDishes = async () => {
    try {
      const french = localStorage.getItem('french');

      if (french) {
        setDishes(JSON.parse(french));
      } else {
        const res = await fetch(
          'https://api.spoonacular.com/recipes/random?apiKey=0386ce9e5c044718b7bea7b05be25dc2&cuisine=French&number=16'
        );
        const data = await res.json();

        localStorage.setItem('french', JSON.stringify(data.recipes));
        setDishes(data.recipes);
        console.log(data.recipes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDishes();
  }, []);

  return (
    <>
      <div className="container mb-10">
        <h2 className="font-Poppins text-lg sm:text-xl md:text-2xl mb-6">
          French Cuisines
        </h2>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: 'free,',
            gap: '6rem',
          }}
        >
          {dishes.map((dish, index) => (
            <SplideSlide key={index}>
              <a href={dish.sourceUrl} target="_blank">
                <div className="relative w-[16rem] h-[9rem]">
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
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default French;
