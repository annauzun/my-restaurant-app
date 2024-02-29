import EmptyCart from "./EmptyCart"
import { ItemType, CartItemType } from "components/Restaurant/MenuOfRestaurant"
import { CiTrash } from "react-icons/ci"
import Count from "./Count"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    //const cartItems = JSON.parse(localStorage.getItem("cart")!) || []
    // console.log(cartItems)
    const [count, setCount] = useState(1)
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")!) || []
    )
    const [totalCost, setTotalCost] = useState(
        cartItems.length > 0
            ? cartItems.reduce(
                  (sum: number, item: ItemType) => sum + Math.round(item.price),
                  0
              )
            : 0
    )

    useEffect(() => {
        setTotalCost(
            cartItems.length > 0
                ? cartItems.reduce(
                      (sum: number, item: ItemType) =>
                          sum + Math.round(item.price),
                      0
                  )
                : 0
        )
    }, [cartItems])

       const deleteItem = (id: number) => {
        let newItems = cartItems.filter((item: ItemType) => item.id !== id)
        localStorage.setItem("cart", JSON.stringify(newItems))
        setCartItems(newItems)
    }

    const addToCart = (cartItem: CartItemType): void => {
        
            const newCartItem: CartItemType = {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }

            let newItems = cartItems.filter(c => c.itemId !== cartItem.itemId)

            setCartItems([...newItems, newCartItem])
        } 
        
        const minus = (cartItem: CartItemType): void => {
        
            if (cartItem.quantity > 1) {
            const newCartItem: CartItemType = {
                ...cartItem,
                 
                quantity: cartItem.quantity - 1
            }

            let newItems = cartItems.filter(c => c.itemId !== cartItem.itemId)

            setCartItems([...newItems, newCartItem])
        }
        } 


    const clearCart = () => {
        localStorage.clear()
        setCartItems([])
    }

   
    return (
        <div className="items-center w-full lg:w-1/2 xl:w-1/3 mx-auto">
            <p className="text-center text-3xl font-semibold my-4">Корзина</p>
            <div className=" mb-4">
                <p className="pl-4 py-1 text-xl font-bold bg-[#5e6600] text-white">
                    Состав заказа
                </p>

                {cartItems.length === 0 && (
                    <div className="flex flex-col gap-4 justify-center items-center py-10 bg-white">
                        <EmptyCart />
                    </div>
                )}

                {cartItems.length > 0 && (
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
                                            <p className="text-md">
                                                {item.name}
                                            </p>
                                           {/*<p className="text-md">
                                                {item.quantity} не работает, нужно Сount привязать
                                            </p>*/}
                                            <p className="text-md">
                                                {Math.round(item.price)} ₽{" "}
                                            </p>
                                        </div>
                                        <div className="flex flex-nowrap w-full justify-between items-center">
                                            <div className="flex px-4 bg-stone-200 rounded-md items-center justify-between gap-2">
                                                <Count 
                                                count={item.quantity}
                                                plus={plus}
                                                minus={minus}/>
                                            </div>
                                            <button
                                                className="text-xl hover:scale-125 bg-stone-200 rounded-md p-1"
                                                onClick={() =>
                                                    deleteItem(item.id)
                                                }
                                            >
                                                <CiTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="text-right text-xl font-semibold px-4 mt-6 mb-2">
                                Итого: {totalCost} ₽
                            </div>
                            <div className="flex justify-between gap-4 px-6 pb-3">
                                {/*<button className="my-2 px-2 py-1 rounded-md bg-[#5e6600] text-white border  hover:bg-white hover:text-[#5e6600] hover:border-[#5e6600]">
                                Продолжить покупки
                        </button>*/}
                                <Link to={`/`}>
                                    <button className="my-2 px-2 py-1 rounded-md bg-[#5e6600] text-white border  hover:bg-white hover:text-[#5e6600] hover:border-[#5e6600]">
                                        Перейти на главную страницу
                                    </button>
                                </Link>
                                <button
                                    className="my-2 px-2 py-1 rounded-md bg-[#5e6600] text-white border  hover:bg-white hover:text-[#5e6600] hover:border-[#5e6600]"
                                    onClick={() => clearCart()}
                                >
                                    Очистить корзину
                                </button>
                            </div>
                        </div>
                        <div className="bg-white my-4">
                            <p className="pl-4 py-1 text-xl font-bold bg-[#5e6600] text-white">
                                Оформить заказ
                            </p>
                            <div className="">
                                ORDER FORM
                            </div>
                            <button className="my-2 px-2 py-1 rounded-md bg-[#5e6600] text-white border  hover:bg-white hover:text-[#5e6600] hover:border-[#5e6600]">
                                Заказать
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
