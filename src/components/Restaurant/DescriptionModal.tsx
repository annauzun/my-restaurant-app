import { Disclosure } from "@headlessui/react"
import { AiOutlineInfo } from "react-icons/ai"

type Props = {
    name: string
    description: string
}
export default function DescriptionModal(props: Props) {
    const { name, description } = props
    return (
        <div className="w-full">
            <div className="w-full bg-white">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Panel className="p-2 text-md text-black absolute z-10 bg-slate-100/75 top-0">
                                {description}
                            </Disclosure.Panel>
                            <div className="flex w-full gap-3 justify-center text-xl bg-stone-400 p-1 z-20 text-stone-900">
                                {name}
                                <Disclosure.Button className="p-1 rounded-md  border border-stone-900 hover:bg-stone-700 hover:border-stone-700 hover:text-stone-100">
                                    <AiOutlineInfo />
                                </Disclosure.Button>
                            </div>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
