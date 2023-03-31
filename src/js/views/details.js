import React,{ useContext } from "react";
import '../../styles/details.css'
import { Context } from "../store/appContext";


export default function Detials() {
  const { store, actions } = useContext(Context);
  return (
    //Some html code should go here
    <section className="payment-form dark">
        <div className="container">
          <div className="block-heading">
            <h2>Task Details Page</h2>
            <p>You can modify your task on this page.</p>
          </div>
          <form>
            {<div className="products">
              <h3 className="title">...</h3>
              <div className="item">
                <span className="price">...</span>
                <p className="item-name">Task Info</p>
                <p className="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="item">
                <span className="price">123456</span>
                <p className="item-name">ID No.</p>
                <p className="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="item">
                <span className="price">Id</span>
                <p className="item-name">CREATED ON</p>
                <p className="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="item">
                <span className="price">Id</span>
                <p className="item-name">Status</p>
                <p className="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="total">Added Description<span className="price">Change</span></div>
            </div>}
            <div className="card-details">
              <h3 className="title">Modify Details</h3>
              <div className="row">
                <div className="form-group col-sm-3">
                  <p>
                    <label for="card-holder">Task Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm fa-2x"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-solid fa-list-check"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label for="card-holder">Date Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-solid fa-calendar-days fa-2x"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label for="card-holder">Status Channge</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm fa-2x"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-solid fa-bars-progress"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <p>
                    <label for="card-holder">Add Memo</label>
                  </p>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm fa-2x"
                    type="button"
                    id="trash"
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
        </div>
      </section>
  );
}








// {store.list.length !== 0 ? (
//   store.list.map((item, index) => (
//     <div className="products">
// <h3 className="title">...</h3>
// <div className="item" key={index}>
// <span className="price">{item["Task Info"]}</span>
// <p className="item-name">Task Info</p>
// <p className="item-description">Lorem ipsum dolor sit amet</p>
// </div>
// <div className="item">
// <span className="price">{item["ID Info"]}</span>
// <p className="item-name">ID No.</p>
// <p className="item-description">Lorem ipsum dolor sit amet</p>
// </div>
// <div className="item">
// <span className="price">{item["Created"]}</span>
// <p className="item-name">CREATED ON</p>
// <p className="item-description">Lorem ipsum dolor sit amet</p>
// </div>
// <div className="item">
// <span className="price"><label className={"badge badge-" + item["Status"]["Color"]}>{item["Status"]["Status"]}</label></span>
// <p className="item-name">Status</p>
// <p className="item-description">Lorem ipsum dolor sit amet</p>
// </div>
// <div className="total">Added Description<span className="price">Change</span></div>
// </div>
// ))):("hi")}