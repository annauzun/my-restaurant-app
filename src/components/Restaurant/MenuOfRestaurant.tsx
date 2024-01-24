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
            <div className="my-10 gap-2 grid sm:grid-cols-3 lg:grid-cols-4 mx-auto">
                {items.map((item) => {
                    return (
                            <div className="mx-6 flex flex-col my-2 border rounded-md bg-white py-2 px-4 justify-between items-center shadow-lg">
                                <img
                                    src={item.image}
                                    alt=""
                                    className=" h-48 object-cover object-center"
                                ></img>
                                <h3 className="text-3xl text-stone-800 text-center my-2">
                                    {item.name}
                                </h3>
                                <p className=" text-stone-800">
                                    {item.description}
                                </p>
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
