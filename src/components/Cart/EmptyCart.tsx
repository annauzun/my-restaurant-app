import { SlBasket } from "react-icons/sl"

const EmptyCart = () => {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center mt-20 ">
                <SlBasket className="h-1/3 w-1/3" />
                <p className="text-3xl text-center mx-4 text-stone-800">
                    Ваша корзина пока пуста
                </p>
            </div>
        </>
    )
}

export default EmptyCart
