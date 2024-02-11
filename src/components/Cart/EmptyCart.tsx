import { SlBasket } from "react-icons/sl"
import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <>
            <SlBasket className="h-1/4 w-1/4" />
            <p className="text-2xl text-center mx-4 mb-10 text-stone-800">
                Ваша корзина пуста
            </p>
            <Link to={`/`}>
                <button className="mx-auto px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                    Перейти на главную страницу
                </button>
            </Link>
        </>
    )
}

export default EmptyCart
