/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import {updateOrders} from '../../services/apiRestaurant'


function UpdateOrder({order}) {
    const fetcher = useFetcher()


return <fetcher.Form method="PATCH" className="text-right">
 <Button type='primary'>Make Priority</Button>

</fetcher.Form>

  
}

export default UpdateOrder


export async function action ({request, params}){
    const data = {priority:true}
    await updateOrders(params.orderID, data)
 return null
}