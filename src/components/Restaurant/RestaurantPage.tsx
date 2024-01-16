import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RestaurantType } from "./CardOfRestaurant";
const RestaurantPage = () => {
   
    const { slug } = useParams()
    console.log(slug)

    const [restaurant, setRestaurant] = useState<RestaurantType>()
    useEffect(() => {
      fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
        .then((response) => response.json())
        .then((data) => setRestaurant(data));
    }, [slug]);

    console.log(restaurant)

    return (
<>
        <div className="text-2xl text-sky-700">{restaurant?.name}</div>
        
        <p className="text-lg">{restaurant?.address}</p>
        <p className="text-lg">{restaurant?.email}</p>
        <p className="">{restaurant?.description}</p>
                
              
        
    
    
    
 </>)   
        
}

export default RestaurantPage