import { Disclosure } from '@headlessui/react'
import { SlArrowDown } from "react-icons/sl";

export default function DescriptionModal(props:any) {
    const {name, description} = props
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg text-center text-2xl font-[Oxygen] mb-2 bg-stone-100 px-4 py-2 font-medium text-stone-900 hover:bg-stone-200 focus:outline-none focus-visible:ring focus-visible:ring-stone-500/75">
                <span>{name}</span>
                <SlArrowDown 
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-[#5e6600]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="p-2 text-sm text-stone-700">
                {description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
