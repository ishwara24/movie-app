import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const screenWidth = window.innerWidth;

function Slider() {
  const [movies, setMovies] = useState([]);

  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  useEffect(() => {
    try {
      getTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sliderRight = (element) => {
    element.scrollRight += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <MdArrowBackIos
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
        className="hidden md:block text-white text-[35px] absolute mx-8 mt-[150px] cursor-pointer"
      />
      <MdArrowForwardIos
        onClick={() => {
          sliderRight(elementRef.current);
        }}
        className="hidden md:block text-white text-[35px] absolute mx-8 mt-[150px] right-0 cursor-pointer"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
      >
        {movies.map((item, index) => {
          return (
            <img
              className="min-w-full md:h-[310px] object-cover mr-5 rounded-md"
              src={IMAGE_BASE_URL + item.backdrop_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
