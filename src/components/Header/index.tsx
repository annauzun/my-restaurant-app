import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl"
import { MdOutlineCall } from "react-icons/md"

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
                    <div className="flex items-center gap-4 text-xl">
                        <p className="hidden sm:flex">
                            +7 123 456 7890
                        </p>
                        <p className="flex sm:hidden">
                            <MdOutlineCall />
                        </p>
                        <Link to={`/cart`}>
                            <div className="flex gap-1 items-center ml-4 text-xl">
                            <button className="hidden sm:flex">
                                Корзина 
                            </button>
                            <button className="flex sm:hidden">
                                <SlBasket />
                            </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
