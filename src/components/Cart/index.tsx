import { Link } from "react-router-dom"
import EmptyCart from "./EmptyCart"
import { ItemType} from "components/Restaurant/MenuOfRestaurant"
import { CiTrash } from "react-icons/ci";
import Count from "./Count";



    
    
    
const Cart = () => {
    
    const cartItems = JSON.parse(localStorage.getItem("cart") || "false") || []
    console.log(cartItems)

   
    
    return (
        <div className="hidden 2xl:flex flex-col 2xl:w-1/4 max-h-screen items-center border rounded-xl bg-white pb-4 shadow-lg ">
            <p className="px-4 py-2 w-full bg-[#5e6600] text-white text-center text-2xl rounded-t-xl">
                Корзина
            </p>
            {cartItems.length === 0 && (
            
            <EmptyCart />)}
            {cartItems.length > 0 && cartItems.map ((item:ItemType) => (
                
                    <div className="flex flex-nowrap w-full p-1 gap-1 items-center">
                        <img
                                        src={item.image}
                                        alt=""
                                        className="w-12 h-12 object-cover object-center"
                                    ></img>
                      <div className="w-full flex-col px-3">
                        <div className="flex flex-nowrap w-full gap-1 justify-between items-center">
                      <p className="text-md">{item.name}</p>
                      <p className="text-md">{Math.round(item.price)} ₽ </p>
                      </div>
                      <div className="flex flex-nowrap w-full justify-between items-center">
                      <div className="flex px-4 bg-stone-200 rounded-md items-center justify-between gap-2"><Count /></div>
                      <p className="text-xl"><CiTrash /></p>
                      </div>
                      </div>
                    </div>
                )
            )}
            <div>Стоимость </div>
            <Link to={`/сart`}>
                <button className="my-2 px-4 py-2 rounded-md bg-[#5e6600] text-white border border-white hover:border-[#5e6600]">
                    Оформить заказ
                </button>
            </Link>
        </div>
    )
}

export default Cart
