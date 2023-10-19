import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import {useForm} from 'react-hook-form';

const AddItem = () => {

    const {
        handleSubmit
    } = useForm()

    const [Items, setItems] = useState({
        name : "",
        category :"",
        price :'' ,
        stock :""
    });


    const submitHandler= async(data)=>{
        // console.log(Items)
        axios({
            method:'POST',
            url:'http://localhost:3009/items/create',
            data:Items
        }).then(()=>{
           Swal.fire(
                'Data Berhasil Diubah!',
                'Tekan Tombol!',
                'success'
            )
        }).catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error : ${error.message}`

              })
        })
        
    }
    
    return (
        <div>
            <div className='container'>

                <div className="card text-center align-content-between">
                    <div className="card-header ">
                        <h2>Insert Item</h2>
                    </div>
                    <div className="card-body ">
                        
                    <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="row g-3  mb-3">
                        <div className="col-3 ">
                            <label className="col-form-label">Nama Item</label>
                        </div>
                        <div className="col-8 text-end">
                            <input type="text" id="nama" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setItems({...Items,name:e.target.value})}/>
                        </div>
                    </div>

                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3">
                            <label className="col-form-label">Category</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id="category" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setItems({...Items,category:e.target.value})}/>
                        </div>
            </div>

                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3">
                            <label className="col-form-label">Price</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id="price" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setItems({...Items,price:e.target.value})}/>
                        </div>
                    </div>

                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3">
                            <label className="col-form-label">Stock</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id="stock" className="form-control" aria-describedby="passwordHelpInline" onChange={(e)=>setItems({...Items,stock:e.target.value})}/>
                        </div>
                    </div>

                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3">
                            <label className="col-form-label">Image</label>
                        </div>
                        <div className="col-8">
                            <input type="text" id="image" className="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                    </div>
                    
                        <button type="submit" className="btn btn-primary">Tambah Data</button>  

                    <div className="row g-3 justify-content-end align-items-end mb-3">
                        <div className="col-2">
                        </div>
                        <div className="col-9">
                        </div>
                    </div>

                

                    </form>

                    </div>
                    
                </div>

                </div>
        </div>
    );
}

export default AddItem;
