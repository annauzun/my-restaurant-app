import { Disclosure } from "@headlessui/react"
import { BiFoodMenu } from "react-icons/bi";

type Props = {
    name: string
    description: string
}
export default function DescriptionModal(props: Props) {
    const { name, description } = props
    return (
        <div className="w-full">
            <div className="w-full max-w-md bg-white">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Panel className="p-2 text-md text-black absolute z-10 bg-slate-100/75 top-0">
                                {description}
                            </Disclosure.Panel>
                            <div className="flex w-full gap-3 justify-center text-xl font-[Oxygen] bg-stone-100 p-1 z-20 font-semibold text-stone-900">{name}
                            <Disclosure.Button className="px-2 py-1 rounded-md  border border-stone-900 hover:bg-stone-700 hover:border-stone-100 hover:text-stone-100">
                                
                                <BiFoodMenu />
                            </Disclosure.Button>
                            </div>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
