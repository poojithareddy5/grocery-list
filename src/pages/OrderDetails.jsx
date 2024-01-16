import React from 'react'
import { useData } from '../hooks/useData'

const OrderDetails = () => {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Sr.No</span></td>
                    <td><span>Order Details</span></td>
                    <td><span>Name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone</span></td>
                    <td><span>Txn Status</span></td>
                    <td><span>Total Amount</span></td>
                    <td><span>Discount</span></td>
                    <td><span>Order Type</span></td>
                    <td><span>Rating</span></td>
                    <td><span>Order Status</span></td>
                    <td><span>Total Taxes</span></td>
                </tr>
            </thead>
            {
                data?.map((items, index) => <DataList key={index} items={items} index={index}/>)
            }
        </table>
    )
}

const DataList = ({ items, index }) => {
    return (
        <>
            <tbody className='team-data-list' >
                <tr>
                    <td><span>{index+1}</span></td>
                    <td><span>{items.OrderDetails}</span></td>
                    <td><span>{items.Name}</span></td>
                    <td><span>{items.Email}</span></td>
                    <td><span>{items.Phone}</span></td>
                    <td><span>{items.TxnStatus}</span></td>
                    <td><span>{items.TotalAmount}</span></td>
                    <td><span>{items.Discount}</span></td>
                    <td><span>{items.OrderType}</span></td>
                    <td><span>{items.Rating}</span></td>
                    <td><span>{items.OrderStatus}</span></td>
                    <td><span>{items.TotalTaxes}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default OrderDetails