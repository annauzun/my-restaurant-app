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
                className="flex justify-center bg-center w-full h-[600px]"
                style={{ backgroundImage: "url(/img/bgimage.png)" }}
            >
                <div className="hero">
                    ЛУЧШИЕ РЕСТОРАНЫ ГОРОДА <br /> У ВАС ДОМА
                </div>
            </div>
            <div className="my-10 gap-2 grid sm:grid-cols-2 lg:grid-cols-3">
                {restaurants.map((restaurant) => {
                    return (
                        <div className="mx-10 flex flex-col my-2 border rounded-md bg-white p-4 justify-between items-center shadow-lg">
                            <div key={restaurant.id}>
                                <img
                                    alt=""
                                    src={restaurant.image}
                                    className="h-60 object-cover object-center w-full shadow-xl shadow-slate-300"
                                ></img>
                                <h3 className="text-3xl text-stone-700 text-center my-3">
                                    {restaurant.name}
                                </h3>
                                <p className=" text-stone-800">
                                    {restaurant.description}
                                </p>
                            </div>
                            <Link to={`restaurant/${restaurant.slug}`}>
                                <button className="my-2 px-4 py-2 rounded-md bg-[#5e6600] text-white">
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
