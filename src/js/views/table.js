import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Table() {
  const { store, actions } = useContext(Context);
  
  return (
    //Some html code should go here
            <div className="card mt-5" id="page-content">
              <div className="card-body p-0 mt-2">
                <h4 className="card-title text-center my-4 fs-2">Todo List Table</h4>
                {/* <p className="card-description">Fix this</p> */}
                <div className="table-responsive pb-0">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th className="py-4">Task Info</th>
                        <th className="py-4">ID No.</th>
                        <th className="py-4">Created On</th>
                        <th className="py-2">
                          <p className="py-0 m-0">
                            Status
                          </p>
                          <button
                            onClick={(e) => actions.switchStatusButton(e)}
                            className=" btn btn-outline-black btn-sm mx-0 "
                            type="button"
                            id="switch"
                          >
                            <i className="fa-solid fa-shuffle" id="statusIcon"></i>
                          </button>
                        </th>
                        <th className="pb-1">
                          <p className="py-0 m-0">
                            Modify
                          </p>
                          <button
                            onClick={(e) => actions.displayArrow(e)}
                            className=" btn btn-outline-black btn-sm mx-1 "
                            type="button"
                            id="arrow"
                          >
                            <i className="fa-solid fa-up-down"></i>
                          </button>
                          <button
                            onClick={(e) => actions.displayTrash(e)}
                            className=" btn btn-outline btn-sm mx-1"
                            type="button"
                            id="dTrash"
                          >
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        </th>
                        <th className="py-4">Memo Added</th>
                        <th className="py-4">Go To Page</th>
                      </tr>
                    </thead>



                  				
					<tbody>
				{store.list.length !== 0 ? (
              		store.list.map((item, index) => (
                      <tr className="m-1" key={index}>
                        <td className="pl-2 py-3 text-left">{item["Task Info"]}</td>
                        <td className="py-3">{item["ID Info"]}</td>
                        <td className="py-3" >{item["Created"]}</td>
                        <td className="pt-3 pb-0">
                          <label className={"badge badge-" + item["Status"]["Color"]} id="switchIcon">
                            {item["Status"]["Status"]}
                          </label>
                        </td>
                        <td className="py-2">
                          <button
                            onClick={() => actions.moveItemUp(index)}
                            style={{ display:"show" }}
                            className=" btn btn-outline-dark btn-sm mx-1 up"
                            type="button"
                            id="bUp"
                          >
                            <i className="fa-solid fa-caret-up fa-2x"></i>
                          </button>
                          <button
                            onClick={() => actions.moveItemDown(index)}
                            style={{ display:"show" }}
                            className=" btn btn-outline-dark btn-sm mx-1 down"
                            type="button"
                            id="bDown"
                          >
                            <i className="fa-solid fa-caret-down fa-2x"></i>
                          </button>
                          <button
                            onClick={() => actions.trashIcon(index)}
                            style={{ display:"none" }}
                            className=" btn btn-outline-danger btn-sm bTrash"
                            type="button"
                            id="bTrash"
                          >
                            <i className="fa-regular fa-trash-can fa-2x"></i>
                          </button>
                        </td>
                        <td className="py-2">
                        
                        </td>
                        <td className="">
                          <Link  className="m-0 p-0" to="/detials">
                        <button
                            onClick={() => actions.gotoPage(item["ID Info"])}
                            className=" btn btn-outline-primary btn-sm my-1"
                            type="button"
                            id="link"
                          >
                            <i className="fa-regular fa-hand-point-right pr-2 m-1 fa-lg"></i>
                            Go To Link Page for details
                          </button>
                          </Link>
                        </td>
                      </tr>))):(
                      <li className="list-group-item d-flex justify-content-between align-items-center border border-2 border border-primary border border-3">
                        Please add some task to the list...
                      </li>)}
                    </tbody>
                  </table>
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
              </div>
            </div>
  );
}




