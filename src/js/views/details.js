import React,{ useContext } from "react";
import '../../styles/details.css'
import { Context } from "../store/appContext";



export default function Detials() {
  const { store, actions } = useContext(Context);
  console.log(store)
  return (
    //Some html code should go here
    <section className="payment-form dark">
        <div className="container">
          <div className="block-heading">
            <h1>Task Details Page</h1>
            <p className="fs-5">You can modify your task on this page.</p>
          </div>
          
{store.details.length !== 0 ? (
  store.details.map((item, index) => (
    <form className={"border-top border-4 border-"+ item["Status"]["Color"]} key={index}>
    <div className="products" >
<div className="item">
<p className="item-name">Task Info</p>
<span className="price text-break text-right">{item["Task Info"]}</span>
</div>
<div className="item">
<p className="item-name">ID No.</p>
<span className="price">{item["ID Info"]}</span>
</div>
<div className="item">
<p className="item-name">CREATED ON</p>
<span className="price">{item["Created"]}</span>
</div>
<div className="item">
<p className="item-name">Status</p>
<span className="price"><label className={"badge badge-" + item["Status"]["Color"]}>{item["Status"]["Status"]}</label></span>
</div>
<div className="m-0 ">
  <p className="mt-0 text-center text-uppercase fw-bold"> Added Memo</p>
  <div className="p-2" id="memoBox">{item["Memo"]}
</div>
</div>
</div>
<div className="card-details text-center">
              <h3 className="title">Modify Details</h3>
              <div className="row">
                <div className="form-group col-sm-3">
                  <p>
                    <label className="Label">Task Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className={"btn-sm fa-2x btn btn-outline-" + item["Status"]["Color"]}
                    type="button"
                    id="check"
                  >
                    <i className="fa-solid fa-list-check"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label className="Label" >Date Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className={"btn-sm btn btn-outline-" + item["Status"]["Color"]}
                    type="button"
                    id="date"
                  >
                    <i className="fa-solid fa-calendar-days fa-2x"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label className="Label" >Status Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)} 
                    className={"btn-sm fa-2x btn btn-outline-" + item["Status"]["Color"]}
                    type="button"
                    id="status"
                  >
                    <i className="fa-solid fa-bars-progress"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p className="mb-2">
                    <label className="Label" >Add Memo</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className={"btn-sm fa-2x btn btn-outline-" + item["Status"]["Color"]}
                    type="button"
                    id="memo"
                  >
                    <i className="fa-solid fa-file-medical"></i>
                  </button>
                </div>
                <div className="form-group col-sm-12">
                  <button type="button" className="btn btn-primary btn-block">
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </form>
))):    
<form className="border-top border-4 border-primary">
<div className="products">
<div className="item" >
<span className="price">N/A</span>
<p className="item-name">Task Info</p>
</div>
<div className="item">
<span className="price">N/A</span>
<p className="item-name">ID No.</p>
</div>
<div className="item">
<span className="price">N/A</span>
<p className="item-name">CREATED ON</p>
</div>
<div className="item">
<span className="price">N/A</span>
<p className="item-name">Status</p>
</div>
<div className="m-0 ">
  <p className="mt-0 text-center text-uppercase fw-bold"> Added Memo</p>
  <div className="p-2 text-center">There is Noting Here</div>
</div>
</div>


            <div className="card-details text-center">
              <h3 className="title">Modify Details</h3>
              <div className="row">
                <div className="form-group col-sm-3">
                  <p>
                    <label className="Label">Task Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-dark btn-sm fa-2x"
                    type="button"
                    id="check"
                  >
                    <i className="fa-solid fa-list-check"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label className="Label" >Date Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-dark btn-sm"
                    type="button"
                    id="date"
                  >
                    <i className="fa-solid fa-calendar-days fa-2x"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label className="Label" >Status Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-dark btn-sm fa-2x"
                    type="button"
                    id="status"
                    data-bs-toggle="modal" data-bs-target="#Modal" data-bs-whatever="@getbootstrap"
                  >
                    <i className="fa-solid fa-bars-progress"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p className="mb-2">
                    <label className="Label" >Add Memo</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-dark btn-sm fa-2x"
                    type="button"
                    id="memo"
                  >
                    <i className="fa-solid fa-file-medical"></i>
                  </button>
                </div>
                <div className="form-group col-sm-12">
                  <button type="button" className="btn btn-primary btn-block">
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </form>}
          <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                      <div className="modal-content">
                        <div className="modal-header p-0">
                          <h1 className="col modal-title fs-5 text-center mt-2" id="exampleModalLabel">Status Change</h1>
                          <button type="button" className="btn-close my-1 mr-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-2 pb-0">
                            {store.statusArr.map((item, index)=>{
                              return(<div className="text-center" key={index}>
                              <label className={"p-3 col badge badge-" + item["Color"]}  >
                                {item["Status"]}
                              </label>
                            {console.log(item["Status"])}
                        </div>)})}
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </section>
  );
}



// const url = 'https://cors-anywhere.herokuapp.com/https://asdfast.beobit.net/api/?type=paragraph&length=1&startLorem=true';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Replace with your API response handling
//   })
//   .catch(error => {
//     console.error(error); // Replace with your error handling
//   });

// const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length=50&startLorem=true');

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.contents); // Replace with your API response handling
//   })
//   .catch(error => {
//     console.error(error); // Replace with your error handling
//   });
