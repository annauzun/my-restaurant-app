import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

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

    return (
        <>
            <div className="mx-10 my-5 gap-2 grid sm:grid-cols-3 lg:grid-cols-4">
                {items.map((item) => {
                    return (
                        <div className="flex flex-col m-2 border rounded-xl bg-white gap-4 pb-4 justify-between items-center shadow-lg">
                            <div>
                                <img
                                    src={item.image}
                                    alt=""
                                    className="rounded-t-xl h-48 object-cover object-center w-full"
                                ></img>
                                <div className="text-center text-2xl font-[Oxygen] text-stone-800 mb-2">
                                    <p>{Math.round(item.price)} руб.</p>
                                    <p>{item.name}</p>
                                </div>
                                <p className="px-4 text-stone-800">
                                    {item.description}
                                </p>
                            </div>
                            <Link to={`/сart`}>
                                <button className="my-2 px-4 py-2 rounded-md bg-[#5e6600] text-white">
                                    Добавить в корзину
                                </button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MenuOfRestaurant
