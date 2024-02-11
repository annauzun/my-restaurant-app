/*import { useState } from "react";
const OrderForm = () => {

    const [customerName, setCustomerName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [email, setEmail] = useState<string>("");
    const handleSubmit = (e:any) => {
		e.preventDefault();

		const data = {
			customerName: customerName,
			phone: phone,
			email: email,
			restaurantId: restaurantId,
			cartItems: cart,
		};

		fetch("https://www.bit-by-bit.ru/api/student-projects/restaurants/order", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				setRequestStatus("success");
				setCart(data.cartItems);
				setCart([]);
			})
			.catch((error) => {
				setRequestStatus("error");
			});
	};
    return (
        <div className="">
            <div>
                                    <p className="text-lg mt-2">Фамилия Имя</p>
                                    <input
                                        className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                                        type="text"
                                        onChange={(e) =>
                                            setCustomerName(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <p className="text-lg mt-2">
                                        Телефон для связи
                                    </p>
                                    <input
                                        className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                                        type="phone"
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <p className="text-lg mt-2">Email</p>
                                    <input
                                        className="w-full h-8 mb-2 border border-solid border-gray-600 rounded-md pl-1 text-sm"
                                        type="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
            
        </div>
    )
}

export default OrderForm*/
