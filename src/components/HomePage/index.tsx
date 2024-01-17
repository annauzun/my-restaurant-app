import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RestaurantType } from "components/Restaurant/CardOfRestaurant"

const HomePage = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants")
            .then((response) => response.json())
            .then((data) => setRestaurants(data))
    }, [])
    console.log(restaurants)
    return (
        <>
            <div className="text-2xl text-sky-700">Страница ресторана</div>
            <div className="my-10 gap-3 grid sm:grid-cols-2 lg:grid-cols-3">
                {restaurants.map((restaurant) => {
                    return (
                        <div className="mx-10 flex flex-col my-2 border rounded-md ">
                            <img
                            alt=""
                                src={restaurant.image}
                                className=" h-48 object-cover object-center"
                            ></img>
                            <h3 className="text-3xl text-sky-800 text-center">
                                {restaurant.name}
                            </h3>
                            <p className=" text-sky-800">
                                {restaurant.description}
                            </p>

                            <Link to={`restaurant/${restaurant.slug}`}>
                                <button className="justify-self-center my-2 w-52 px-4 py-2 rounded-md bg-sky-700 text-white">
                                    Перейти на страницу ресторана
                                </button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default HomePage
