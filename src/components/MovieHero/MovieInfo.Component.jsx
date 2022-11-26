import React,{ useContext } from 'react'
import { MovieContext } from '../../context/Movie.Context';
import PaymentModel from '../PaymentModel/Payment.Component';


const MovieInfo = ({movie}) => {

  const {price, setIsOpen,isOpen, buyMovie, rentMovie} = useContext(MovieContext);
  const genres = movie.genres?.map(({name}) => name).join(", ");

  return (
    <>
    <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-8 ">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex  flex-col gap-2 text-white">
          <h4>{movie.vote_average} IMDB Rating</h4>
          <h4>English, Hindi, Telugu, Tamil, Kannada  </h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={rentMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Rent ₹149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
          >
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  )
}

export default MovieInfo