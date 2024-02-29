import { HiPlus, HiMinus } from "react-icons/hi2"

type Props = {
    count: number
    minus: any
    plus: any
}
const Count = (props: Props) => {

    const {count, minus, plus} = props
   /* const [count, setCount] = useState(1)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        if (count > 1) setCount(count - 1)
    }
*/
    return (
        <div className="flex gap-4 text-xl">
            <button onClick={minus}>
                {" "}
                <HiMinus />{" "}
            </button>
            <p className="">{count}</p>

            <button onClick={plus}>
                {" "}
                <HiPlus />{" "}
            </button>
        </div>
    )
}

export default Count
