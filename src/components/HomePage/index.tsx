import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RestaurantType } from "components/Restaurant/RestaurantPage"
import "./styles.css"
import { format } from "date-fns"
import { SlLocationPin, SlClock, SlPhone } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";

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
            <div className="m-10 gap-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {restaurants.map((restaurant) => {
                    return (
                        <div className="flex flex-col bg-white p-2 justify-between rounded-lg shadow-xl hover:opacity-85">
                            <div key={restaurant.id}>
                                <img
                                    alt=""
                                    src={restaurant.image}
                                    className="h-60 object-cover object-center w-full"
                                ></img>
                                <h3 className="text-3xl text-stone-700 text-center my-3">
                                    {restaurant.name}
                                </h3>
                                <div className="flex flex-col gap-2 flex-wrap text-md pl-2">
                                    <div className="flex gap-2  flex-wrap items-center">
                                        <SlLocationPin />
                                        <p className="font-medium">Адрес:</p>{" "}
                                        <p>{restaurant.address}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <SlClock />
                                        <p className="font-medium">
                                            Время работы:
                                        </p>{" "}
                                        <p>{format(restaurant.openAt, 'HH:mm')} - {format(restaurant.closeAt, 'HH:mm')}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <SlPhone />
                                        <p className="font-medium">Телефон:</p>{" "}
                                        <p>+7 {restaurant.phone}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <MdAlternateEmail />
                                        <p className="font-medium">E-mail:</p>{" "}
                                        <p>{restaurant.email}</p>
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
