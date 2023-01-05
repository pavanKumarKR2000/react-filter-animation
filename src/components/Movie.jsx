import { motion } from 'framer-motion';

const Movie = ({ title, imgUrl }) => {
    
    if (title === "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe") {
        title = "The Chronicles of Narnia";
    }

    else if (title === "Glass Onion: A Knives Out Mystery") {
        title = "Glass Onion";
    }

    else if (title === "Black Panther: Wakanda Forever") {
        title = "Black Panther";
    }

    return (
        <motion.div layout initial={{opacity:0}} animate={{opacity:1}}  className=" p-4 shadow-md bg-white rounded-sm hover:cursor-pointer ">
            <h1 className="text-center mb-4 italic font-semibold">{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w200${imgUrl}`} className="h-[50%] rounded-sm" alt="poster" />
        </motion.div>
    )
  }
  
  export default Movie;