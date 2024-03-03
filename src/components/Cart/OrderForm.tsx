import { useState, useEffect } from "react"
import MyModal from "./SendModal"


export type OrderType = {
    customerName: string
  phone: number
  email: string
  restaurantId: number
  cartItems: [
    { itemId: number, quantity: number, price: number}
  ]
}
const OrderForm = () => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")!) || []
    )
    useEffect(() => {
        console.log("cartItems", cartItems)
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    console.log(cartItems)

    const [customerName, setCustomerName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const handleSubmit = (e: any) => {
        e.preventDefault()

        const data: OrderType = {
			customerName: customerName,
			phone: parseInt(phone),
			email: email,
			restaurantId: 5,
			cartItems: cartItems,
		};
console.log(data)
		fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/order", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				
				setCartItems(data.cartItems);
				setCartItems([]);
			})
			
    }
    return (
        <div className="">
            <div className="">
                <p className="text-lg mt-2">Фамилия Имя</p>
                <input
                    value={customerName}
                    name="customerName"
                    className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                    type="text"
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div>
                <p className="text-lg mt-2">Телефон для связи</p>
                <input
                    value={phone}
                    name="phone"
                    className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                    type="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <p className="text-lg mt-2">Email</p>
                <input
                    value={email}
                    name="email"
                    className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-md bg-[#5e6600] px-4 py-1 text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Отправить заказ
                </button>
            </div>
            <MyModal />
        </div>
    )
}

export default OrderForm
