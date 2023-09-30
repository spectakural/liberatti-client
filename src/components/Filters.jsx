import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import "./Filters.scss"

export const Filters = () => {

    const options = [{name:"Kural", id:1},{name:"Amuthan", id:2},{name:"Abi", id:3},{name:"Rami", id:4}]
    const [names, setNames] = useState("Helloworld")

    return (
        <div className='filter-container'>
            <div className="genres">
                <h3>Genres</h3>
                <Multiselect 
                    options={options}
                    displayValue='name'
                    onSelect={(list, item)=>{
                    }}
                />
            </div>
            <div className="Authors">
                <h3>Authors</h3>
                <Multiselect 
                    options={options}
                    displayValue='name'
                    onSelect={(list, item)=>{
                    }}
                />
            </div>
        </div>
    )
}
