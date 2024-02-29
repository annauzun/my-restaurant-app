import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RestaurantType } from "components/Restaurant/RestaurantPage"
import "./styles.css"
import { format } from "date-fns"
import { SlLocationPin, SlClock, SlPhone } from "react-icons/sl"
import { MdAlternateEmail } from "react-icons/md"

const HomePage = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants")
            .then((response) => response.json())
            .then((data) => setRestaurants(data))
    }, [])
    console.log(restaurants)
    if (!restaurants) {
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
        <div>
            <div
                className="flex justify-center bg-center w-full h-[400px]"
                style={{ backgroundImage: "url(/img/bgimage.png)" }}
            >
                <div className="hero">
                    ЛУЧШИЕ РЕСТОРАНЫ ГОРОДА <br /> У ВАС ДОМА
                </div>
            </div>
            <div className=" w-11/12 mx-auto my-10 gap-4 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {restaurants.map((restaurant) => {
                    return (
                        <div className="flex flex-col bg-white p-2 justify-between rounded-lg shadow-xl hover:opacity-85">
                            <div key={restaurant.id}>
                                <img
                                    alt=""
                                    src={restaurant.image}
                                    className="h-48 object-cover object-center w-full"
                                ></img>
                                <h3 className="text-3xl text-stone-700 text-center my-3">
                                    {restaurant.name}
                                </h3>
                                <div className="flex flex-col flex-wrap text-md pl-2">
                                    <div className="flex gap-2  flex-wrap items-center">
                                        <SlLocationPin />{" "}
                                        <p>{restaurant.address}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <SlClock />{" "}
                                        <p>
                                            {format(restaurant.openAt, "HH:mm")}{" "}
                                            -{" "}
                                            {format(
                                                restaurant.closeAt,
                                                "HH:mm"
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <SlPhone /> <p>+7 {restaurant.phone}</p>
                                    </div>
                                    <div className="flex gap-2 flex-wrap items-center">
                                        <MdAlternateEmail />{" "}
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
