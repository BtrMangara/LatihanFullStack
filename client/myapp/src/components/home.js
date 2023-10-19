import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { MdOutlineModeEdit, MdDeleteOutline } from'react-icons/md';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';



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

    const deleteHandler =async(id)=>{

        await Swal.fire({
            title: 'Apakah Kamu Yakin Ingin Menghapus Item ini?',
            showCancelButton: true,
            confirmButtonText: 'Hapus!',    
          }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method:'DELETE',
                    url:`http://localhost:3009/items/delete/${id}`
                })
                Swal.fire('Data Sukses Terhapus!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Data Gagal Terhapus', '', 'info')
            }
        })
        getItems();
    }

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
                        <tr key={id}>
                            <td>{index+1}</td>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>Rp. {price},-</td>
                            <td>{stock}</td>
                            <td className='text-center'>
                            <button
                                onClick={() => deleteHandler(id)}
                                className="btn btn-sm btn-danger me-4"
                            >
                                <MdDeleteOutline className="me-1" />
                                Delete
                            </button>
                            <Link to={'/editItem/'+id}>
                                <button className="btn btn-sm btn-info">
                                    <MdOutlineModeEdit className="me-1" />
                                    Update
                                </button>
                            </Link>
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
