import React from "react";
import '../../styles/details.css'

export default function Detials() {
  return (
    //Some html code should go here
    <section class="payment-form dark">
        <div class="container">
          <div class="block-heading">
            <h2>Task Details Page</h2>
            <p>You can modify your task on this page.</p>
          </div>
          <form>
            <div class="products">
              <h3 class="title">...</h3>
              <div class="item">
                <span class="price">...</span>
                <p class="item-name">Task Info</p>
                <p class="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="item">
                <span class="price">123456</span>
                <p class="item-name">ID No.</p>
                <p class="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="item">
                <span class="price">Id</span>
                <p class="item-name">CREATED ON</p>
                <p class="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="item">
                <span class="price">Id</span>
                <p class="item-name">Status</p>
                <p class="item-description">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="total">Added Description<span class="price">Change</span></div>
            </div>
            <div class="card-details">
              <h3 class="title">Modify Details</h3>
              <div class="row">
                <div class="form-group col-sm-3">
                  <label for="card-holder">Task Channge</label>
                  <i class="fa-sharp fa-regular fa-list-check"></i>
                </div>
                <div class="form-group col-sm-3">
                  <label for="card-holder">Date Channge</label>
                  <i class="fa-sharp fa-light fa-calendar-days"></i>
                </div>
                <div class="form-group col-sm-3">
                  <label for="card-holder">Status Channge</label>
                  <i class="fa-sharp fa-light fa-arrow-progress"></i>
                </div>
                <div class="form-group col-sm-3">
                  <label for="card-holder">Add Description</label>
                  <i class="fa-sharp fa-light fa-square-dashed-circle-plus"></i>
                </div>
                <div class="form-group col-sm-12">
                  <button type="button" class="btn btn-primary btn-block">Proceed</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
  );
}
