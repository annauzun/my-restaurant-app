import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DescriptionModal from "./DescriptionModal"
import { SlBasket } from "react-icons/sl"
import { Link } from "react-router-dom"
import { HiPlus, HiMinus } from "react-icons/hi2"
import { v4 as uuidv4 } from "uuid"

export type ItemType = {
    id: number
    name: string
    image: string
    description: string
    price: number
    restaurantId: number
}

export type CartItemType = {
    id: number
    itemId: number
    quantity: number
    restaurantId: number
    name: string
    image: string
    description: string
    price: number
}

const MenuOfRestaurant = () => {
    const { slug } = useParams()
    const [menuItems, setMenuItems] = useState<ItemType[]>([])

    const [cartItems, setCartItems] = useState<CartItemType[]>(
        JSON.parse(localStorage.getItem("cart")!) || []
    )

    useEffect(() => {
        fetch(
            `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`
        )
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
    }, [slug])

    useEffect(() => {
        console.log("cartItems", cartItems)
        localStorage.setItem("cart", JSON.stringify(cartItems))
        /*if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]")
        }*/
    }, [cartItems])

    const addToCart = (item: ItemType): void => {
        const currentCartItem = cartItems.find(
            (cartItem) => cartItem.itemId === item.id
        )

        if (currentCartItem) {
            const newCartItem: CartItemType = {
                ...currentCartItem,
                quantity: currentCartItem.quantity + 1
            }

            let newItems = cartItems.filter(
                (cartItem) => cartItem.itemId !== currentCartItem.itemId
            )

            setCartItems([...newItems, newCartItem])
        } else {
            const newCartItem: CartItemType = {
                id: parseInt(uuidv4()),
                itemId: item.id,
                quantity: 1,
                restaurantId: item.restaurantId,
                name: item.name,
                image: item.image,
                description: item.description,
                price: item.price
            }
            setCartItems([...cartItems, newCartItem])
        }
    }

    const removeFromCart = (item: ItemType): void => {
        const currentCartItem = cartItems.find(
            (cartItem) => cartItem.itemId === item.id
        )

        if (currentCartItem) {
            if (currentCartItem.quantity > 0) {
                const newCartItem: CartItemType = {
                    ...currentCartItem,
                    quantity: currentCartItem.quantity - 1
                }

                let newItems = cartItems.filter(
                    (cartItem) => cartItem.itemId !== currentCartItem.itemId
                )

                setCartItems([...newItems, newCartItem])
            }
        } else {
            const newCartItem: CartItemType = {
                id: 123,
                itemId: item.id,
                quantity: 1,
                restaurantId: item.restaurantId,
                name: item.name,
                image: item.image,
                description: item.description,
                price: item.price
            }
            setCartItems([...cartItems, newCartItem])
        }
    }

    const findCurrentItem = (item: ItemType) => {
        return cartItems.find((c) => c.itemId === item.id)
    }

    const [totalQuantity, setTotalQuantity] = useState(
        cartItems.length > 0
            ? cartItems.reduce(
                  (sum: number, item: CartItemType) => sum + item.quantity,
                  0
              )
            : 0
    )

    useEffect(() => {
        setTotalQuantity(
            cartItems.length > 0
                ? cartItems.reduce(
                      (sum: number, item: CartItemType) => sum + item.quantity,
                      0
                  )
                : 0
        )
    }, [cartItems])
    return (
        <div className="flex px-2 gap-4">
            <div className="">
                <Link to={`/cart`}>
                    <button className="z-50 flex cursor-pointer fixed right-4 bottom-4 hover:scale-105">
                        <SlBasket className="h-14 w-14  " />
                        <div className="text-xl rounded-full bg-red-500 text-white px-2 ml-[-10px]">
                            {totalQuantity}
                        </div>
                    </button>
                </Link>
            </div>

            <div className="w-4/5 mx-auto flex">
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
                                <p className="text-xl font-semibold p-1 z-20 text-[#5e6600] text-left ml-2">
                                    Цена: {Math.round(item.price)} руб.
                                </p>

                                <div>
                                    {/*<Link to={`/сart`}>*/}
                                    {findCurrentItem(item) &&
                                    findCurrentItem(item)?.quantity !== 0 ? (
                                        <div className="flex justify-center py-2 gap-5 rounded-b-xl items-center text-xl bg-[#5e6600] text-white">
                                            <button
                                                className="hover:text-black font-bold"
                                                onClick={() =>
                                                    removeFromCart(item)
                                                }
                                            >
                                                {" "}
                                                <HiMinus />{" "}
                                            </button>

                                            {findCurrentItem(item) && (
                                                <div>
                                                    {
                                                        findCurrentItem(item)
                                                            ?.quantity
                                                    }
                                                </div>
                                            )}
                                            <button
                                                className="hover:text-black font-bold"
                                                onClick={() => addToCart(item)}
                                            >
                                                {" "}
                                                <HiPlus />{" "}
                                            </button>

                                            {/*</Link>*/}
                                        </div>
                                    ) : (
                                        <button
                                            className="flex justify-center py-2 rounded-b-xl items-center text-xl bg-[#5e6600] text-white w-full hover:text-stone-900"
                                            onClick={() => addToCart(item)}
                                        >
                                            Заказать
                                        </button>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <div className="flex flex-col rounded-xl bg-stone-200 h-screen">
                <p className="px-4 py-2 bg-[#5e6600] text-white text-center text-2xl rounded-t-xl">
                    Корзина
                </p>

                {cartItems.length > 0 ? (
                    <div>
                        <div className="p-6 bg-white">
                            {cartItems.map((item: CartItemType) => (
                                <div className="flex flex-nowrap w-full gap-1 items-center mb-1">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-14 h-14 object-cover object-center border border-[#5e6600] rounded-md"
                                    ></img>
                                    <div className="w-full flex-col pl-3">
                                        <div className="flex flex-nowrap w-full gap-1 justify-between items-center">
                                            <p className="text-md w-3/4 text-left">
                                                {item.name}
                                            </p>

                                            <p className="text-md w-1/4 text-right">
                                                {Math.round(
                                                    item.price * item.quantity
                                                )}{" "}
                                                ₽{" "}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <EmptyCart />
                )}
                </div>*/}
        </div>
    )
}

export default MenuOfRestaurant
