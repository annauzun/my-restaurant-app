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
    openAt: string
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

    return (
        <>
            <div className="flex flex-col relative">
                <img
                    alt=""
                    src={restaurant?.image}
                    className="h-96 object-cover object-center  w-full  shadow-md "
                ></img>
                <div className="text-6xl text-white bg-[#5e6600bd] font-['Rufina'] font-medium top-12 pl-48 py-5 pr-12 absolute ">
                    {restaurant?.name}
                </div>
                <p className="xl:text-2xl lg:text-xl sm:text-lg text-center text-[#5e6600] font-medium bg-slate-100/75 my-4  xl:w-3/4 lg:w-full top-36 pr-48 py-5 pl-12 right-0 absolute">
                    {restaurant?.description}
                </p>
            </div>

            <div className="text-lg  mx-4 my-6 flex flex-wrap gap-10 justify-between">
                <div className="flex gap-2 flex-wrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                    <p className="font-medium">Адрес:</p>{" "}
                    <p>{restaurant?.address}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    <p className="font-medium">Время работы:</p>{" "}
                    <p>
                        {restaurant?.openAt} - {restaurant?.closeAt}
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                    </svg>
                    <p className="font-medium">Телефон:</p>{" "}
                    <p>+7 {restaurant?.phone}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                    <p className="font-medium">E-mail:</p>{" "}
                    <p>{restaurant?.email}</p>
                </div>
            </div>

            <MenuOfRestaurant />
        </>
    )
}

export default RestaurantPage
