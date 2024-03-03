import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl"


const Header = () => {
    return (
        <div className="">
            <div className="flex py-3 sticky z-100 top-0 bg-[#5e6600bd] shadow-md shadow-slate text-white">
                <div className="flex justify-between w-4/5 mx-auto">
                    <Link
                        to={`/`}
                        className="text-xl md:text-4xl font-['Rufina']"
                    >
                        FoodRest
                    </Link>
                    <div className="flex items-center gap-4">
                        <p className="text-sm sm:text-xl ">+7 123 456 7890</p>
                        <Link to={`/cart`}>
                            <button className="flex gap-1 justify-between items-center sm:text-xl ml-4">
                                Корзина <SlBasket />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
