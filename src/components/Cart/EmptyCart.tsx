import { SlBasket } from "react-icons/sl"

const EmptyCart = () => {
    return (
        <>
            <SlBasket className="h-1/4 w-1/4 mx-auto" />
            <p className="text-2xl mx-4 mb-10 text-stone-800">
                Ваша корзина пуста
            </p>
        </>
    )
}

export default EmptyCart
