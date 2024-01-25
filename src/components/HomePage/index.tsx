import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RestaurantType } from "components/Restaurant/RestaurantPage"
import "./styles.css"

const HomePage = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants")
            .then((response) => response.json())
            .then((data) => setRestaurants(data))
    }, [])
    return (
        <div className="">
            <div
                className="flex justify-center bg-center w-full h-[560px]"
                style={{ backgroundImage: "url(/img/bgimage.png)" }}
            >
                <div className="hero">
                    ЛУЧШИЕ РЕСТОРАНЫ ГОРОДА <br /> У ВАС ДОМА
                </div>
            </div>
            <div className="m-10 gap-6 grid sm:grid-cols-3 lg:grid-cols-4">
                {restaurants.map((restaurant) => {
                    return (
                        <div className="flex flex-col bg-white p-2 justify-between rounded-lg shadow-xl">
                            <div key={restaurant.id}>
                                <img
                                    alt=""
                                    src={restaurant.image}
                                    className="h-60 object-cover object-center w-full"
                                ></img>
                                <h3 className="text-3xl text-stone-700 text-center my-3">
                                    {restaurant.name}
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2">
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
                                    <div className="flex gap-2">
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
                                        <p className="font-medium">
                                            Время работы:
                                        </p>{" "}
                                        <p>{restaurant?.openAt}</p>
                                    </div>
                                    <div className="flex gap-2">
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
                                    <div className="flex gap-2">
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
                            </div>
                            <Link to={`restaurant/${restaurant.slug}`}>
                                <button className="flex my-2 mx-auto px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                                    Перейти на страницу ресторана
                                </button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
