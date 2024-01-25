const Header = () => {
    return (
        <>
            <div className="flex py-3 sticky z-10 top-0 bg-[#5e6600bd] shadow-md shadow-slate  font-['Rufina'] text-white">
                <div className="flex justify-between w-4/5 mx-auto">
                    <a href="/" className="text-4xl ">
                        FoodRest
                    </a>
                    <div className="flex items-center text-xl gap-2">
                        <p>+7 123 456 7890</p>
                        <div className="border ml-4 px-4 py-1">Заказать</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
