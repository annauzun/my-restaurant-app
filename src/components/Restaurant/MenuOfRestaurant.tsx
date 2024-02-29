import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DescriptionModal from "./DescriptionModal"
import Cart from "components/Cart"


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

    const [cartItems, setCartItems] = useState<CartItemType[]>(JSON.parse(localStorage.getItem("cart")!) || [])


    useEffect(() => {
        fetch(
            `https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`
        )
            .then((response) => response.json())
            .then((data) => setMenuItems(data))
    }, [slug])


    useEffect(() => {
<<<<<<< HEAD
=======
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
>>>>>>> 5365aac7e10c3d74d0487238fce8b983e8b5c90b

        console.log("cartItems", cartItems)
        localStorage.setItem("cart", JSON.stringify(cartItems))
        /*if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]")
        }*/
    }, [cartItems])
    
    const addToCart = (item: ItemType): void => {
        const currentCartItem = cartItems.find(cartItem => cartItem.itemId === item.id)

        if (currentCartItem) {
            const newCartItem: CartItemType = {
                ...currentCartItem,
                quantity: currentCartItem.quantity + 1
            }

            let newItems = cartItems.filter(cartItem => cartItem.itemId !== currentCartItem.itemId)

            setCartItems([...newItems, newCartItem])
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

    const removeFromCart = (item: ItemType): void => {
        const currentCartItem = cartItems.find(cartItem => cartItem.itemId === item.id)

        if (currentCartItem && currentCartItem.quantity > 1) {
            const newCartItem: CartItemType = {
                ...currentCartItem,
                quantity: currentCartItem.quantity - 1
            }

            let newItems = cartItems.filter(cartItem => cartItem.itemId !== currentCartItem.itemId)

            setCartItems([...newItems, newCartItem])
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
        return cartItems.find(c => c.itemId === item.id)
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
                                <p className="text-xl font-[Oxygen] font-semibold p-1 z-20 text-[#5e6600] text-left ml-2">
                                        Цена: {Math.round(item.price)} руб.
                                    </p>

                                <div >
                                    
                                    {/*<Link to={`/сart`}>*/}
                                    <div className="flex justify-center py-2 gap-5 rounded-b-xl items-center text-xl font-[Oxygen] bg-[#5e6600] text-white">
                                    <button
                                            className="px-2  rounded-md  border border-white  hover:bg-white hover:text-[#5e6600] font-bold"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            -
                                        </button>
                                       
                                        {findCurrentItem(item) && 
                                            <div>
                                                
                                                {findCurrentItem(item)?.quantity}</div>
                                        }
                                        <button
<<<<<<< HEAD
                                            className="px-2  rounded-md  border border-white  hover:bg-white hover:text-[#5e6600] font-bold"
=======
                                            className="py-2 px-4 rounded-md  border border-white  hover:bg-white hover:text-[#5e6600] font-bold"
>>>>>>> 5365aac7e10c3d74d0487238fce8b983e8b5c90b
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
            <div className="w-1/4">
                <Cart />
            </div>
        </>
    )
}

export default MenuOfRestaurant
