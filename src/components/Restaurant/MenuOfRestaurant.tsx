import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DescriptionModal from "./DescriptionModal"

export type ItemType = {
    id: number
    name: string
    image: string
    description: string
    price: number
    restaurantId: number
    quantity: 1
}

const MenuOfRestaurant = () => {
    const { slug } = useParams()
    console.log(slug)
    const [menuItems, setMenuItems] = useState<ItemType[]>([])

    const [cartItems, setCartItems] = useState<ItemType[]>([])

    useEffect(() => {
        fetch(
            `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`
        )
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
    }, [slug])

    console.log(menuItems)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]")
        }
    }, [cartItems])
    console.log(cartItems)

    const addToCart = (item: ItemType): void => {
        let isAdded = false
        cartItems.forEach((el) => {
            if (el.id === item.id) isAdded = true
        })
        if (!isAdded) setCartItems([...cartItems, item])
        console.log(cartItems)
    }

    return (
        <>
            <div className="w-4/5 mx-auto flex gap-4">
                <div className="w-full gap-2 grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {menuItems.map((item) => {
                        return (
                            <div className="flex flex-col border bg-white shadow-xl rounded-xl relative">
                                <div>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="h-40 sm:h-48 xl:h-54 lg:h-60 object-cover object-center w-full rounded-t-xl"
                                    ></img>
                                    <DescriptionModal
                                        name={item.name}
                                        description={item.description}
                                    />
                                </div>
                                <div className="flex justify-center gap-4 py-2 rounded-b-xl items-center text-xl font-[Oxygen] bg-[#5e6600] text-white">
                                    <p className="font-medium ">
                                        {Math.round(item.price)} ₽
                                    </p>

                                    {/*<Link to={`/сart`}>*/}
                                    <div>
                                        <button
                                            className="py-2 px-4 rounded-md  border border-white  hover:bg-white hover:text-[#5e6600] font-bold"
                                            onClick={() => addToCart(item)}
                                        >
                                            +
                                        </button>
                                        {/*</Link>*/}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MenuOfRestaurant
