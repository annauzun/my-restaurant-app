import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuOfRestaurant from "./MenuOfRestaurant"

export type RestaurantType = {
    id: number
    name: string
    slug: string
    phone: number
    email: string
    address: string
    cuisine: string
    image: string
    openAt: number
    closeAt: number
    description: string
}

const RestaurantPage = () => {
    const { slug } = useParams()
    console.log(slug)

    const [restaurant, setRestaurant] = useState<RestaurantType>()
    useEffect(() => {
        fetch(
            `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`
        )
            .then((response) => response.json())
            .then((data) => setRestaurant(data))
    }, [slug])

    console.log(restaurant)

    useEffect(() => {
        fetch(
            `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`
        )
            .then((response) => response.json())
            .then((data) => setRestaurant(data))
    }, [slug])

    console.log(restaurant)

    return (
        <>
            <div className="flex flex-col mt-10 relative">
                <img
                    alt=""
                    src={restaurant?.image}
                    className="h-72 object-cover object-center  w-4/5  shadow-xl shadow-slate-300 rounded-3xl mb-6 mx-auto"
                ></img>
                <div className="text-6xl text-white font-['Rufina'] top-48 left-60 absolute ">
                    {restaurant?.name}
                </div>
            </div>
            <p className="text-lg">{restaurant?.address}</p>
            <p className="text-lg">{restaurant?.email}</p>
            <p className="">{restaurant?.description}</p>

            <MenuOfRestaurant />
        </>
    )
}

export default RestaurantPage
