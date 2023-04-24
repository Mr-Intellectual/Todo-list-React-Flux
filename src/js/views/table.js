import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Table() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="card mt-5  " id="page-content">
      <div className="card-body p-0 mt-2">
        <h4 className="card-title text-center my-4 fs-2">Todo List Table</h4>
        <div className="table-responsive pb-0">
          <table className="table m-0">
            <thead className="">
              <tr className="" id="headerRow">
                <th className="">
                  <p className="p-0 mb-3 mx-2 text-nowrap text-center">
                    Task Info
                  </p>
                  <div className="mb-2 p-1"></div>
                </th>
                <th className="">
                  <p className="p-0 mb-3 mx-2 text-nowrap text-center">
                    ID No.
                  </p>
                  <div className="mb-2 p-1"></div>
                </th>
                <th className="">
                  <p className="p-0 mb-3 mx-2 text-nowrap text-center">
                    Created On
                  </p>
                  <div className="mb-2 p-1"></div>
                </th>
                <th className="">
                  <p className="p-0 mb-0 mx-2">
                    Status
                  </p>
                  {store.list.length === 0 ? <div className="mb-4 p-1"></div> : (
                    <div className="">
                      <button
                        onClick={(e) => actions.switchStatusButton(e)}
                        className=" btn btn-outline-dark btn-sm mx-0 "
                        type="button"
                        id="switch"
                      >
                        <i className="fa-solid fa-shuffle" id="statusIcon"></i>
                      </button>
                    </div>
                  )}

                </th>
                <th className="">
                  <p className="p-0 mb-0 mx-2 text-center">
                    Modify
                  </p>
                  {store.list.length === 0 ? <div className="mb-4 p-1"></div> : (
                    <div className="text-nowrap">
                      <button
                        onClick={(e) => actions.displayArrow(e)}
                        className="btn btn-outline-dark btn-sm mx-1"
                        type="button"
                        id="arrow"
                      >
                        <i className="fa-solid fa-up-down"></i>
                      </button>
                      <button
                        onClick={(e) => actions.displayTrash(e)}
                        className="btn btn-outline-dark btn-sm mx-1"
                        type="button"
                        id="dTrash"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>)}
                </th>
                <th className="">
                  <p className="p-0 mb-3 mx-2 text-nowrap text-center">
                    Memo Added
                  </p>
                  <div className="mb-2 p-1"></div>
                </th>
                <th className="">
                  <p className="p-0 mb-3 mx-2 text-nowrap text-center">
                    Go To Page
                  </p>
                  <div className="mb-2 p-1"></div>
                </th>
              </tr>
            </thead>




            <tbody>
              {store.list.length !== 0 ? (
                store.list.map((item, index) => (
                  <tr className="m-1" key={index}>
                    <td className="pl-2 py-3 text-left text-break">{item["Task Info"]}</td>
                    <td className="py-3" id="ID-Info">{item["ID Info"]}</td>
                    <td className="py-3" >{item["Created"]}</td>
                    <td className="pt-3 pb-0">
                      <label className={"badge badge-" + item["Status"]["Color"] + (store.statusIDHolder[0]["state"] === true ? " status" : "")} id="switchIcon" onClick={(e) => actions.setID(e)}>
                        {item["Status"]["Status"]}
                      </label>
                    </td>
                    <td className="py-2 text-nowrap">
                      <button
                        onClick={() => actions.moveItemUp(index)}
                        style={{ display: "show" }}
                        className=" btn btn-outline-dark btn-sm mx-1 up"
                        type="button"
                        id="bUp"
                      >
                        <i className="fa-solid fa-caret-up fa-2x"></i>
                      </button>
                      <button
                        onClick={() => actions.moveItemDown(index)}
                        style={{ display: "show" }}
                        className=" btn btn-outline-dark btn-sm mx-1 down"
                        type="button"
                        id="bDown"
                      >
                        <i className="fa-solid fa-caret-down fa-2x"></i>
                      </button>
                      <button
                        onClick={() => actions.trashIcon(index)}
                        style={{ display: "none" }}
                        className=" btn btn-outline-danger btn-sm bTrash"
                        type="button"
                        id="bTrash"
                      >
                        <i className="fa-regular fa-trash-can fa-2x"></i>
                      </button>
                    </td>
                    <td className="py-2">
                      {item["Memo"] === "" ?
                        <i className="fa-regular fa-square-minus fa-3x"></i> :
                        <i className="fa-regular fa-square-check fa-3x"></i>}


                    </td>
                    <td className="align-middle">
                      <Link className="m-0 p-0" to="/detials">
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
                  </tr>))) : (
                <tr className="m-1">
                  <td colSpan="7" className="align-middle">
                    <div>
                      <p className="mt-4 fs-4">There is Nothing Here... Click the Button to Add Tasks</p>
                    </div>
                    <Link className="m-4 p-2 d-grid" to="/todo">
                      <button
                        className=" btn btn-outline-dark btn-lg my-1"
                        type="button"
                        id="link"
                      >
                        <i className="fa-regular fa-hand-point-right pr-2 m-1 fa-lg"></i>
                        Click Here To Add Tasks
                      </button>
                    </Link>
                  </td>
                </tr>
              )}
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
                  {useMemo(() => {
                    return store.statusArr.map((item, index) => {
                      return (
                        <div className="text-center" key={index}>
                          <label className={"p-3 col badge badge-" + item["Color"]} onClick={(e) => actions.statusChangeTable(e)} data-bs-dismiss="modal">
                            {item["Status"]}
                          </label>
                        </div>
                      );
                    });
                  }, [store.statusArr])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




