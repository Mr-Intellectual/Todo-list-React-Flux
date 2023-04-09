import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/details.css'
import { Context } from "../store/appContext";



export default function Detials() {
  const { store, actions } = useContext(Context);
  console.log(store)
  return (
    //Some html code should go here
    <section className="detail-form dark">
        <div className="container">
          <div className="block-heading">
            <h1>Task Details Page</h1>
            <p className="fs-5">You can modify your task on this page.</p>
          </div>
          
{store.details.length !== 0 ? (
  store.details.map((item, index) => (
    <form className={"border-top border-4 border-"+ item["Status"]["Color"]} key={index}>
    <div className="detail-Info" >
<div className="item row">
<p className="item-name col-3">Task Info</p>
<span className="Info overflow-scroll text-right col-9">{item["Task Info"]}</span>
</div>
<div className="item row">
<p className="item-name col-3">ID No.</p>
<span className="Info text-right col-9">{item["ID Info"]}</span>
</div>
<div className="item row">
<p className="item-name col-3">CREATED ON</p>
<span className="Info text-right col-9">{item["Created"]}</span>
</div>
<div className="item row">
<p className="item-name col-3">Status</p>
<span className="Info text-right col-9"><label className={"badge badge-" + item["Status"]["Color"]}>{item["Status"]["Status"]}</label></span>
</div>
<div className="m-0 ">
  <p className="mt-0 text-center text-uppercase fw-bold"> Added Memo</p>
  <div className="p-2" id="memoBox">{item["Memo"]}
</div>
</div>
</div>
<div className="Mod-details text-center">
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
                    onClick={() => actions.ranDate()}
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
                    className={"btn-sm fa-2x btn btn-outline-" + item["Status"]["Color"]}
                    type="button"
                    id="memo"
                    data-bs-toggle="modal" data-bs-target="#memoModal" data-bs-whatever="@getbootstrap"
                  >
                    <i className="fa-solid fa-file-medical"></i>
                  </button>
                </div>
                <div className="form-group col-sm-12 mt-2 p-2 m-0">
                <h3 className="title">Navigation</h3>
                  <div className="row pl-2">
                    <div className="form-group col-sm-2 m-0 p-0">
                      <p className="m-0">
                        <label className="" >Previous Task</label>
                      </p>
                      <button
                        onClick={() => trash(index)}
                        className={"btn-sm btn btn-outline-" + item["Status"]["Color"]}
                        type="button"
                        id="direction"
                      >
                        <i className="fa-solid fa-angles-right fa-rotate-180"></i>
                      </button>
                    </div>
                      <div className="col-8 mt-4">
                      <Link  className="mx-1 p-0" to="/todo">
                        <button type="button" className="btn btn-primary btn-sm p-2">
                          Goto Entry
                        </button>
                      </Link>
                        <button type="button" className="btn btn-primary btn-sm p-2 mx-1">
                          Save Changes
                        </button>
                      <Link  className="mx-1 p-0" to="/table">
                        <button type="button" className="btn btn-primary btn-sm p-2">
                        Goto Table
                        </button>
                      </Link>
                      </div>
                      
                      <div className="form-group col-sm-2 m-0 p-0"> 
                      <p className="m-0">
                        <label className="" >Next Task</label>
                      </p>
                      <button
                        onClick={() => trash(index)}
                        className={"btn-sm btn btn-outline-" + item["Status"]["Color"]}
                        type="button"
                        id="direction"
                      >
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </form>
))):    
<form className="border-top border-4 border-primary">
<div className="detail-Info">
<div className="item" >
<span className="Info">N/A</span>
<p className="item-name">Task Info</p>
</div>
<div className="item">
<span className="Info">N/A</span>
<p className="item-name">ID No.</p>
</div>
<div className="item">
<span className="Info">N/A</span>
<p className="item-name">CREATED ON</p>
</div>
<div className="item">
<span className="Info">N/A</span>
<p className="item-name">Status</p>
</div>
<div className="m-0 ">
  <p className="mt-0 text-center text-uppercase fw-bold"> Added Memo</p>
  <div className="p-2 text-center">There is Noting Here</div>
</div>
</div>


            <div className="Mod-details text-center">
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
                    onClick={() => actions.ranDate()}
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
                    data-bs-toggle="modal" data-bs-target="#memoModal" data-bs-whatever="@getbootstrap"
                  >
                    <i className="fa-solid fa-file-medical"></i>
                  </button>
                </div>
                <div className="form-group col-sm-12 mt-2 p-2">
                <h3 className="title">Navigation</h3>
                  <div className="row">
                    {/* <div className="form-group col-sm-3">
                      <p className="m-0">
                        <label className="" >Previous Task</label>
                      </p>
                      <button
                        onClick={() => trash(index)}
                        className=" btn btn-outline-dark btn-sm "
                        type="button"
                        id="direction"
                      >
                        <i className="fa-solid fa-angles-right fa-rotate-180"></i>
                      </button>
                    </div> */}
                      <div className="col-6 mt-4">
                      <Link  className="m-0 p-0" to="/todo">
                        <button type="button" className="btn btn-primary">
                          Goto Todo-List Entry
                        </button>
                      </Link>
                      </div>
                      <div className="col-6 mt-4">
                      <Link  className="m-0 p-0" to="/table">
                        <button type="button" className="btn btn-primary">
                        Goto Todo-List Table
                        </button>
                      </Link>
                      </div>
                      {/* <div className="form-group col-sm-3">
                      <p className="m-0">
                        <label className="" >Next Task</label>
                      </p>
                      <button
                        onClick={() => trash(index)}
                        className=" btn btn-outline-dark btn-sm "
                        type="button"
                        id="direction"
                      >
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                    </div> */}
                  </div>

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
        <div className="modal fade" id="memoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal">
                      <div className="modal-content">
                        <div className="modal-header p-0">
                          <h1 className="col modal-title fs-5 text-center mt-2" id="exampleModalLabel">Memo Change</h1>
                          <button type="button" className="btn-close my-1 mr-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-2 pb-0">
                            <form>
                              {/* <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Recipient:</label>
                                <input type="text" className="form-control" id="recipient-name"/>
                              </div> */}
                              <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label text-center mt-2">Write Memo Here:</label>
                                <textarea className="form-control" rows="10" id="message-text"></textarea>
                              </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                           <button type="button" className="btn btn-primary">Send message</button>
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
