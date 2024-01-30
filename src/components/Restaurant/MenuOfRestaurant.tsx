import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import EmptyCart from "./EmptyCart"
import DescriptionModal from "./DescriptionModal"

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
        fetch(
            `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`
        )
            .then((response) => response.json())
            .then((data) => setItems(data))
    }, [slug])

    console.log(items)

    /*useEffect(() =>  {
        const cartItems = JSON.stringify(cart)
    localStorage.setItem("cart", cartItems)
    })*/

    

    return (
        <>
            <div className="flex gap-4 ">
                <div className="w-3/4 ml-20 gap-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {items.map((item) => {
                        return (
                            <div className="flex flex-col m-2 border rounded-xl bg-white gap-2 pb-4 justify-between items-center shadow-xl hover:opacity-85">
                                <div>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rounded-t-xl h-48 object-cover object-center w-full"
                                    ></img>
                                    <div className="text-center text-2xl font-[Oxygen] text-stone-800 mb-2">
                                        <p className="font-semibold px-4 py-2  bg-[#5e6600] text-white">
                                            {Math.round(item.price)} руб.
                                        </p>
                                    </div>
                                    <DescriptionModal name={item.name} description={item.description}/>
                                </div>
                                <Link to={`/сart`}>
                                    <button 
                                    
                                    className="my-2 px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                                        Добавить в корзину
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                
                   <EmptyCart /> 
               
            </div>
        </>
    )
}

export default MenuOfRestaurant
