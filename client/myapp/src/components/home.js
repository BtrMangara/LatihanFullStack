import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { MdOutlineModeEdit, MdDeleteOutline } from'react-icons/md';


const Home = () => {

    const [Items, setItems] = useState([]);

    const getItems=()=>{
        axios({
            method:'GET',
            url:'http://localhost:3009/items'
        })
        .then(result=>{
            // console.log(result.data)
            setItems(result.data)
        })
        .catch((err)=>{
            console.log(err.message);
        });
    };

    useEffect(() => {
        getItems();
    }, []);

    // getItems();
    return (
        <div>
            <div className='container'>
            <table className={"table mt-3"}>
                <thead className='text-center'>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                   {Items.map((item,index)=>{
                    const {id, name, category, price, stock} = item;
                    return(
                        <tr >
                            <td>{index+1}</td>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>Rp. {price},-</td>
                            <td>{stock}</td>
                            <td className='text-center'>
                            <button
                                // onClick={() => deleteHandler(id)}
                                className="btn btn-sm btn-danger me-4"
                            >
                                <MdDeleteOutline className="me-1" />
                                Delete
                            </button>
                            <button className="btn btn-sm btn-info">
                                <MdOutlineModeEdit className="me-1" />
                                Update
                            </button>
                            </td>
                        </tr>
                    )

                   })}
                        
                    
                </tbody>
                </table>
            </div>
           
        </div>
    );
}

export default Home;
