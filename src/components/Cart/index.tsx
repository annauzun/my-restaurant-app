import EmptyCart from "./EmptyCart"
import { CartItemType } from "components/Restaurant/MenuOfRestaurant"
import { CgClose } from "react-icons/cg"
import { HiPlus, HiMinus } from "react-icons/hi2"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import OrderForm from "./OrderForm"

const Cart = () => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")!) || []
    )

    useEffect(() => {
        console.log("cartItems", cartItems)
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    const [totalCost, setTotalCost] = useState(
        cartItems.length > 0
            ? cartItems.reduce(
                  (sum: number, item: CartItemType) =>
                      sum + Math.round(item.price * item.quantity),
                  0
              )
            : 0
    )

    useEffect(() => {
        setTotalCost(
            cartItems.length > 0
                ? cartItems.reduce(
                      (sum: number, item: CartItemType) =>
                          sum + Math.round(item.price * item.quantity),
                      0
                  )
                : 0
        )
    }, [cartItems])

    const deleteItem = (id: number) => {
        let newItems = cartItems.filter(
            (item: CartItemType) => parseInt(item.id) !== id
        )
        setCartItems(newItems)
        localStorage.setItem("cart", JSON.stringify(newItems))
    }

    const increaseQuantity = (item: CartItemType): void => {
        const newCartItem: CartItemType = {
            ...item,
            quantity: item.quantity + 1
        }
        let newItems = cartItems.map((cartItem: CartItemType) =>
            cartItem.itemId === item.itemId ? newCartItem : cartItem
        )
        setCartItems(newItems)
    }

    const decreaseQuantity = (item: CartItemType): void => {
        if (item.quantity > 0) {
            const newCartItem: CartItemType = {
                ...item,
                quantity: item.quantity - 1
            }
            let newItems = cartItems.map((cartItem: CartItemType) =>
                cartItem.itemId === item.itemId ? newCartItem : cartItem
            )
            setCartItems(newItems)
        }
    }

    const clearCart = () => {
        localStorage.clear()
        setCartItems([])
        setTotalCost(0)
    }

    return (
        <div className="items-center w-full lg:w-2/3 xl:w-1/2 mx-auto">
            <p className="text-center text-3xl font-semibold my-4">Корзина</p>
            <div className=" mb-4">
                <div className="flex justify-between px-4 py-2 bg-[#5e6600] text-white">
                    <p className="md:text-xl font-bold">Состав корзины</p>
                    <button
                        className="underline underline-offset-2"
                        onClick={() => clearCart()}
                    >
                        Очистить корзину
                    </button>
                </div>

                {cartItems.length === 0 && (
                    <div className="flex flex-col gap-4 justify-center items-center py-10 bg-white">
                        <EmptyCart />
                        <Link to={`/`}>
                            <button className="mx-auto px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                                Перейти на главную страницу
                            </button>
                        </Link>
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div>
                        <div className="flex flex-nowrap w-full md:text-md items-center bg-white px-1 md:px-6">
                            <div
                                className="flex flex-nowrap w-full justify-between bg-stone-300 text-stone-300 sm:text-stone-800 font-medium my-4 py-1
"
                            >
                                <div className="flex w-1/2 md:w-3/5 justify-between items-center pl-16 pr-3">
                                    <p>Наименование</p>
                                    <p className="hidden md:flex">Цена</p>{" "}
                                </div>

                                <div className="flex w-1/5 justify-center items-center">
                                    Количество
                                </div>
                                <div className="flex w-1/5 justify-end items-center pr-6">
                                    Стоимость
                                </div>
                            </div>
                        </div>
                        <div className="px-1 md:px-6 pb-4 bg-white">
                            {cartItems.map((item: CartItemType) => (
                                <div>
                                    {item.quantity > 0 && (
                                        <div className="flex flex-nowrap w-full gap-1 text-md items-center mb-1">
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-10 h-10 object-cover object-center rounded-md"
                                            ></img>
                                            <div className="flex flex-nowrap w-full justify-between">
                                                <div className="flex md:flex-nowrap w-1/2 md:w-3/5 justify-between items-center pr-3">
                                                    <p className="">
                                                        {item.name}
                                                    </p>
                                                    <p className="hidden md:flex">
                                                        {Math.round(item.price)}{" "}
                                                        ₽{" "}
                                                    </p>
                                                </div>

                                                <div className="flex md:w-1/5 justify-center items-center">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() =>
                                                                decreaseQuantity(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            {" "}
                                                            <HiMinus />{" "}
                                                        </button>
                                                        <p className="">
                                                            {item.quantity}
                                                        </p>

                                                        <button
                                                            onClick={() =>
                                                                increaseQuantity(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            {" "}
                                                            <HiPlus />{" "}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex md:w-1/5 justify-end items-center pr-2">
                                                    {Math.round(
                                                        item.price *
                                                            item.quantity
                                                    )}{" "}
                                                    ₽{" "}
                                                </div>
                                            </div>
                                            <button
                                                className="text-lg hover:scale-125"
                                                onClick={() =>
                                                    deleteItem(
                                                        parseInt(item.id)
                                                    )
                                                }
                                            >
                                                <CgClose />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {totalCost > 0 ? (
                                <div>
                                    <div className="text-right text-xl font-semibold px-4 mt-6 mb-2">
                                        Итого: {totalCost} ₽
                                    </div>
                                    <div className="bg-white my-4">
                                        <p className="pl-4 py-1 md:text-xl text-center font-bold bg-stone-300 text-stone-800">
                                            Оформить заказ
                                        </p>
                                        <div className="">
                                            <OrderForm clearCart={clearCart} />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4 justify-center items-center py-10 bg-white">
                                    <EmptyCart />
                                    <Link to={`/`}>
                                        <button className="mx-auto px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                                            Перейти на главную страницу
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
