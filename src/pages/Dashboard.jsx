import React from 'react'
import { useData } from '../hooks/useData'

const Dashboard = () => {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Sr.No</span></td>
                    <td><span>App Type</span></td>
                    <td><span>Shop Name</span></td>
                    <td><span>name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone Number</span></td>
                    <td><span>Txn Status</span></td>
                    <td><span>Total Amount</span></td>
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
                    <td><span>{items.AppType}</span></td>
                    <td><span>{items.ShopName}</span></td>
                    <td><span>{items.Name}</span></td>
                    <td><span>{items.Email}</span></td>
                    <td><span>{items.Phone}</span></td>
                    <td><span>{items.TxnStatus}</span></td>
                    <td><span>{items.TotalAmount}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default Dashboard