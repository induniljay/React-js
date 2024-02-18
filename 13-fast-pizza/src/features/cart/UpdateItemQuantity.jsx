import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

/* eslint-disable react/prop-types */
function UpdateItemQuantity({pizzaId,currentQuantity}) {

    const dispatch = useDispatch()
    return (
        <div className="flex gap-2 items-center md:gap-3">
           <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button> 
            <p className="text-sm font-medium">{currentQuantity}</p>
           <Button onClick={()=>dispatch(increaseItemQuantity(pizzaId))}   type='round'>+</Button> 
        </div>
    )
}

export default UpdateItemQuantity
