import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ItemType = {
    id: number
    name: string
    image: string
    description: string
    price: number
    restaurantId: number 
}
const MenuOfRestaurant = () => {
    
    const { slug } = useParams()
    console.log(slug)

    const [items, setItems] = useState<ItemType[]>([])
    useEffect(() => {
      fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, []);

console.log(items)

    return (
<>
        <div className="text-2xl text-sky-700">Страница ресторана</div>
        <div className="my-10 gap-3 grid sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
                return (
                <div className="mx-10 flex flex-col my-2 border rounded-md ">
                    <img src={item.image} className=" h-48 object-cover object-center" ></img>
                <h3 className="text-3xl text-sky-800 text-center">{item.name}</h3>
                <p className=" text-sky-800">{item.description}</p>
            
            
                </div>
            )})}
        </div>
    
    
    
    
        </>    )
}

export default MenuOfRestaurant