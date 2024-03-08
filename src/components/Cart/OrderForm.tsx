import { useState, useEffect } from "react"
import MyModal from "./SendModal"

export type OrderType = {
    customerName: string
    phone: number
    email: string
    restaurantId: number
    cartItems: [item: { itemId: number; quantity: number; price: number }]
}

const OrderForm = ({ clearCart }: { clearCart: () => void }) => {
    const [customerName, setCustomerName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    let [isOpen, setIsOpen] = useState(false)
    let [warning, setWarning] = useState(false)

    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")!) || []
    )

    useEffect(() => {
        console.log("cartItems", cartItems)
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    console.log(cartItems)

    const handleSubmit = (e: any) => {
        e.preventDefault()

        try {
            if (customerName === "" || phone === "" || email === "") {
                setWarning(true)
                return
            }

            const requestBody: OrderType = {
                customerName: customerName,
                phone: parseInt(phone),
                email: email,
                restaurantId: 2,
                cartItems: cartItems
            }
            console.log(requestBody)

            fetch(
                "https://www.bit-by-bit.ru/api/student-projects/restaurants/order",
                {
                    method: "POST",
                    body: JSON.stringify(requestBody)
                }
            )
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setCustomerName("")
                    setPhone("")
                    setEmail("")
                    setIsOpen(true)
                    setWarning(false)
                    setCartItems(result.cartItems)
                    setCartItems([])
                    localStorage.clear()
                })
        } catch (error) {
            setWarning(true)
        }
    }

    return (
        <div className="">
            <div className="">
                <div className="flex flex-nowrap justify-between items-center">
                    <p className="text-md text-stone-600 mt-2">Фамилия Имя</p>
                    {warning && (
                        <p className="text-red-600">Заполните все поля</p>
                    )}
                </div>
                <input
                    value={customerName}
                    name="customerName"
                    className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                    type="text"
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div>
                <p className="text-md text-stone-600 mt-2">Телефон для связи</p>
                <input
                    value={phone}
                    name="phone"
                    className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                    type="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <p className="text-md text-stone-600 mt-2">Email</p>
                <input
                    value={email}
                    name="email"
                    className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex justify-center mt-3">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-md bg-[#5e6600] px-4 py-1 text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Отправить заказ
                </button>
            </div>
            <MyModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                clearCart={clearCart}
            />
        </div>
    )
}

export default OrderForm
