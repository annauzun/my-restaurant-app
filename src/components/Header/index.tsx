import { SlBasket } from "react-icons/sl"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="">
            <div className="flex py-3 sticky z-10 top-0 bg-[#5e6600bd] shadow-md shadow-slate  font-['Rufina'] text-white">
                <div className="flex justify-between w-4/5 mx-auto">
                    <Link to={`/`} className="text-xl md:text-4xl">
                        FoodRest
                    </Link>
                    <div className="flex items-center gap-2">
                        <p className="text-sm sm:text-xl ">+7 123 456 7890</p>
                        <Link to={`/cart`}>
                            <button>
                                <SlBasket className="text-xl sm:text-3xl hover:scale-105 cursor-pointer" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
