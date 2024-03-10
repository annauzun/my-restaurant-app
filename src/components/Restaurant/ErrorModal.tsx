import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

type Props = {
    isOpen: boolean
    setIsOpen: any
    clearCart: () => void
}

const ErrorModal = (props: Props) => {
    const { isOpen, setIsOpen, clearCart } = props

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-100" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full z-100 px-2 md:w-1/2 transform overflow-hidden bg-white p-6 text-center align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-red-600"
                                    >
                                        Обратите внимание!
                                    </Dialog.Title>
                                    <div className="">
                                        <p className="text-xl text-gray-500 my-4">
                                            В вашей корзине есть товары из 
                                            другого ресторана!
                                        </p>
                                        <p className="text-lg text-gray-900">
                                            Корзина будет очищена. Хотите
                                            продожить?
                                        </p>
                                    </div>

                                    <div className="flex justify-center gap-4 my-4">
                                        <button
                                            type="button"
                                            className="rounded-md border border-transparent bg-[#5e6600] px-4 py-2 text-sm font-medium text-white hover:bg-stone-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
                                            onClick={() => {
                                                clearCart()
                                                closeModal()
                                            }}
                                        >
                                            Да
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md border border-transparent bg-[#5e6600] px-4 py-2 text-sm font-medium text-white hover:bg-stone-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
                                            onClick={() => closeModal()}
                                        >
                                            Нет
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default ErrorModal
