import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'

const EditItem = () => {

    const {
        handleSubmit
    } = useForm();

    const param = useParams();
    const navigate = useNavigate();

    const [Items, setItems] = useState({
        name : "",
        category :"",
        price :'' ,
        stock :""
    });

    const getData = ()=>{
        axios({
            method:'GET',
            url:'http://localhost:3009/items/getDetails/'+param.id
        })
        .then((result)=>{
            setItems(result.data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    const updateData = ()=>{
        axios({
            method:'PUT',
            url:'http://localhost:3009/items/update/'+param.id,
            data:Items
        })
        .then(()=>{
            Swal.fire(
                'Data Berhasil Diubah!',
                'Tekan Tombol!',
                'success'
            )
            navigate('/');
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Data Gagal Diubah!',
                text: `Error : ${error.message}`
              })
        })
    
    }

    useEffect(() => {
        getData()
    }, []);

  return (
    <div>
      <div className="container">
        <div className="card text-center align-content-between">
          <div className="card-header ">
            <h2>Edit Item</h2>
          </div>
          <div className="card-body ">
            <form onSubmit={handleSubmit(updateData)}>
              <div className="row g-3  mb-3">
                <div className="col-3 ">
                  <label className="col-form-label">Nama Item</label>
                </div>
                <div className="col-8 text-end">
                  <input
                    type="text"
                    id="nama"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value={Items.name}
                    onChange={(e) =>
                      setItems({ ...Items, name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label className="col-form-label">Category</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="category"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value={Items.category}
                    onChange={(e) =>
                      setItems({ ...Items, category: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label className="col-form-label">Price</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="price"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value={Items.price}
                    onChange={(e) =>
                      setItems({ ...Items, price: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label className="col-form-label">Stock</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="stock"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value={Items.stock}
                    onChange={(e) =>
                      setItems({ ...Items, stock: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label className="col-form-label">Image</label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    id="image"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Ubah
              </button>

              <div className="row g-3 justify-content-end align-items-end mb-3">
                <div className="col-2"></div>
                <div className="col-9"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
