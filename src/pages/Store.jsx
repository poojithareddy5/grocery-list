import React from 'react'
import { useData } from '../hooks/useData'

function Store() {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Sr.No</span></td>
                    <td><span>Shop Name</span></td>
                    <td><span>Store LatL-ong</span></td>
                    <td><span>Map Link</span></td>
                    <td><span>Store ShopURL</span></td>
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
                    <td><span>{items.ShopName}</span></td>
                    <td><span>{items.StoreLatLong}</span></td>
                    <td><span>{items.MapLink}</span></td>
                    <td><span>{items.StoreShopURL}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default Store