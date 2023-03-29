import React from "react";
import '../../styles/details.css'

export default function Detials() {
  return (
    //Some html code should go here
    <section className="payment-form dark">
        <div className="container">
          <div className="block-heading">
            <h2>Task Details Page</h2>
            <p>You can modify your task on this page.</p>
          </div>
          <form>
            <div className="products">
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
            </div>
            <div className="card-details">
              <h3 className="title">Modify Details</h3>
              <div className="row">
                <div className="form-group col-sm-3">
                  <label for="card-holder">Task Channge</label>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-solid fa-list-check"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <label for="card-holder">Date Channge</label>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-solid fa-calendar-days"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <label for="card-holder">Status Channge</label>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-solid fa-bars-progress"></i>
                  </button>
                </div>
                <div className="form-group col-sm-3">
                  <label for="card-holder">Add Memo</label>
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm"
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
