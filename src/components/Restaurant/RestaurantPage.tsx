import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MenuOfRestaurant from "./MenuOfRestaurant"
import { format } from "date-fns"
import { SlLocationPin, SlClock, SlPhone } from "react-icons/sl"
import { MdAlternateEmail } from "react-icons/md"

export type RestaurantType = {
    id: number
    name: string
    slug: string
    phone: number
    email: string
    address: string
    cuisine: string
    image: string
    openAt: string
    closeAt: string
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

    if (!restaurant) {
        return (
            <div className="mt-[400px] text-center">
                <div
                    className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col relative">
                <img
                    alt=""
                    src={restaurant.image}
                    className="h-96 object-cover object-center  w-full  shadow-md "
                ></img>
                <div className="text-6xl text-white bg-[#5e6600bd] font-['Rufina'] font-medium top-12 pl-48 py-5 pr-12 absolute ">
                    {restaurant.name}
                </div>
                <p className="xl:text-2xl lg:text-xl sm:text-lg text-center text-[#5e6600] font-medium bg-slate-100/75 my-4  xl:w-3/4 lg:w-full top-36 pr-48 py-5 pl-12 right-0 absolute">
                    {restaurant.description}
                </p>
            </div>

            <div className="text-lg  mx-4 my-6 flex flex-wrap gap-10 justify-between">
                <div className="flex gap-2 flex-wrap items-center">
                    <SlLocationPin />
                    <p className="font-medium">Адрес:</p>{" "}
                    <p>{restaurant.address}</p>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <SlClock />
                    <p className="font-medium">Время работы:</p>{" "}
                    <p>
                        {format(restaurant.openAt, "HH:mm")} -
                        {format(restaurant.closeAt, "HH:mm")}
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <SlPhone />
                    <p className="font-medium">Телефон:</p>{" "}
                    <p>+7 {restaurant.phone}</p>
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                    <MdAlternateEmail className="h-5 w-5" />
                    <p className="font-medium">E-mail:</p>{" "}
                    <p>{restaurant.email}</p>
                </div>
            </div>

            <MenuOfRestaurant />
        </>
    )
}

export default RestaurantPage
