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
                        <div className="border ml-4 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer hover:scale-110 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
