import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl";

const EmptyCart = () => {
    return (
        <div className="w-1/4 flex flex-col max-h-screen items-center mr-20 mt-2 border rounded-xl bg-white pb-4 shadow-lg">
            <p className="px-4 py-2 w-full bg-[#5e6600] text-white text-center text-2xl rounded-t-xl">
                        Корзина
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center mt-20 ">
                    <SlBasket className="h-1/3 w-1/3"/>
                        <p className="text-3xl text-center mx-4 text-stone-800">
                            Ваша корзина пока пуста
                        </p>
                    </div>
                    <Link to={`/сart`}>
                                    <button 
                                    
                                    className="my-2 px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                                        Оформить заказ
                                    </button>
                                </Link>
        </div>

    )
}

export default EmptyCart