import React,{ useContext } from "react";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Table() {
  const { store, actions } = useContext(Context);
  
  return (
    //Some html code should go here
            <div className="card" id="page-content">
              <div className="card-body">
                <h4 className="card-title text-center">Todo List Table</h4>
                <p className="card-description">Fix this</p>
                <div className="table-responsive">
                  <table className="table">
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
                            className=" btn btn-outline-danger btn-sm mx-0 "
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
                            className=" btn btn-outline-danger btn-sm mx-1 "
                            type="button"
                            id="arrow"
                          >
                            <i className="fa-solid fa-up-down"></i>
                          </button>
                          <button
                            onClick={(e) => actions.displayTrash(e)}
                            className=" btn btn-outline-danger btn-sm mx-1"
                            type="button"
                            id="dTrash"
                          >
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        </th>
                        <th className="py-4">Go To Page</th>
                      </tr>
                    </thead>



                  				
					<tbody>
				{store.list.length !== 0 ? (
              		store.list.map((item, index) => (
                      <tr className="m-1" key={index}>
                        <td className="py-3 text-left">{item["Task Info"]}</td>
                        <td className="py-3">{item["ID Info"]}</td>
                        <td className="py-3">{item["Created"]}</td>
                        <td className="pt-3 pb-0">
                          <label className={"badge badge-" + item["Status"]["Color"]}  onClick={(e) => actions.statusIcon(e)} id="switchIcon">
                            {item["Status"]["Status"]}
                            
                          </label>
                        </td>
                        <td className="py-2">
                          <button
                            onClick={() => actions.moveItemUp(index)}
                            style={{ display:"show" }}
                            className=" btn btn-outline-danger btn-sm mx-1 up"
                            type="button"
                            id="bUp"
                          >
                            <i className="fa-solid fa-caret-up fa-2x"></i>
                          </button>
                          <button
                            onClick={() => actions.moveItemDown(index)}
                            style={{ display:"show" }}
                            className=" btn btn-outline-danger btn-sm mx-1 down"
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
                        <button
                            onClick={() => actions.gotoPage(item["ID Info"])}
                            className=" btn btn-outline-danger btn-sm my-1"
                            type="button"
                            id="link"
                          >
                            <i className="fa-regular fa-hand-point-right pr-2 m-1 fa-lg"></i>
                            Go To Link Page for details

                          </button>
                        </td>
                      </tr>))):(
                      <li className="list-group-item d-flex justify-content-between align-items-center border border-2 border border-primary border border-3">
                        Please add some task to the list...
                      </li>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  );
}
