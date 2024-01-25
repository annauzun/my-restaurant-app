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
            <div className="flex gap-4 ">
                <div className="w-3/4 ml-20 gap-2 grid sm:grid-cols-2 lg:grid-cols-3">
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
                                        <p className="font-semibold px-4 py-2  bg-[#5e6600] text-white">
                                            {Math.round(item.price)} руб.
                                        </p>
                                        <p>{item.name}</p>
                                    </div>
                                    <p className="px-4 text-stone-800">
                                        {item.description}
                                    </p>
                                </div>
                                <Link to={`/сart`}>
                                    <button className="my-2 px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                                        Добавить в корзину
                                    </button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="w-1/4 flex flex-col mr-20 mt-2 border rounded-xl bg-white pb-4 shadow-lg">
                    <p className="px-4 py-2  bg-[#5e6600] text-white text-center text-2xl rounded-t-xl">
                        Корзина
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center mt-40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-60 h-60 opacity-20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                        <p className="text-3xl text-center mx-4 text-stone-800">
                            Ваша корзина пока пуста
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuOfRestaurant
