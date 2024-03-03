import EmptyCart from "./EmptyCart"
import { CartItemType } from "components/Restaurant/MenuOfRestaurant"
import { CiTrash } from "react-icons/ci"
import { HiPlus, HiMinus } from "react-icons/hi2"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import OrderForm from "./OrderForm"

const Cart = () => {
    //const cartItems = JSON.parse(localStorage.getItem("cart")!) || []
    // console.log(cartItems)

    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")!) || []
    )

    useEffect(() => {
        console.log("cartItems", cartItems)
        localStorage.setItem("cart", JSON.stringify(cartItems))
        
        
        /*if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]")
        }*/
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
        let newItems = cartItems.filter((item: CartItemType) => item.id !== id)
        setCartItems(newItems)
        localStorage.setItem("cart", JSON.stringify(newItems))
    }

    const addToCart = (item: CartItemType): void => {
        const newCartItem: CartItemType = {
            ...item,
            quantity: item.quantity + 1
        }

        let newItems = cartItems.filter(
            (cartItem: CartItemType) => cartItem.itemId !== item.itemId
        )

        setCartItems([...newItems, newCartItem])
    }

    const minus = (item: CartItemType): void => {
        if (item.quantity > 0) {
            const newCartItem: CartItemType = {
                ...item,

                quantity: item.quantity - 1
            }

            let newItems = cartItems.filter(
                (cartItem: CartItemType) => cartItem.itemId !== item.itemId
            )

            setCartItems([...newItems, newCartItem])
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
                <p className="text-xl font-bold">
                    Состав корзины
                </p>
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
                        
                        <div className="p-6 bg-white">
                            {cartItems.map((item: CartItemType) => (
                                <div>
                                   
                                    {item.quantity > 0 && (
                                        <div className="flex flex-nowrap w-full gap-1 items-center mb-1">
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-14 h-14 object-cover object-center border border-[#5e6600] rounded-md"
                                            ></img>
                                            <div className="w-full flex-col pl-3">
                                                <div className="flex flex-nowrap w-full gap-1 justify-between items-center">
                                                    <p className="text-md">
                                                        {item.name}
                                                    </p>
                                                    
                                                    {/*<p className="text-md">
                                                        {Math.round(item.price)}{" "}
                                                        ₽{" "}
                                                    </p>*/}
                                                    <p className="text-md">
                                                        {Math.round(
                                                            item.price *
                                                                item.quantity
                                                        )}{" "}
                                                        ₽{" "}
                                                    </p>
                                                </div>
                                                <div className="flex flex-nowrap w-full justify-between items-center">
                                                    <div className="flex px-4 bg-stone-200 rounded-md items-center justify-between gap-2">
                                                        <div className="flex gap-4 text-md">
                                                            <button
                                                                onClick={() =>
                                                                    minus(item)
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
                                                                    addToCart(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                {" "}
                                                                <HiPlus />{" "}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="text-lg hover:scale-125 bg-stone-200 rounded-md p-1"
                                                        onClick={() =>
                                                            deleteItem(item.id)
                                                        }
                                                    >
                                                        <CiTrash />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {totalCost > 0 ? (
                                <div>
                                    <div className="text-right text-xl font-semibold px-4 mt-6 mb-2">
                                        Итого: {totalCost} ₽
                                    </div>
                                    <div className="flex justify-center gap-8 px-6 pb-3">
                                        {/*<button className="my-2 px-2 py-1 rounded-md bg-[#5e6600] text-white border  hover:bg-white hover:text-[#5e6600] hover:border-[#5e6600]">
                                Продолжить покупки
                                    </button>
                                        <Link to={`/`}>
                                            <button className="my-2 px-2 py-1 rounded-md bg-[#5e6600] text-white border  hover:bg-white hover:text-[#5e6600] hover:border-[#5e6600]">
                                                Перейти на главную страницу
                                            </button>
                                        </Link>*/}
                                        
                                        
                                    </div>
                                    <div className="bg-white my-4">
                            <p className="pl-4 py-1 text-xl font-bold bg-stone-300 text-stone-800">
                                Оформить заказ
                            </p>
                            <div className=""><OrderForm/></div>
                            
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
