import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import '../../styles/details.css'
import { Context } from "../store/appContext";



export default function Detials() {
  const { store, actions } = useContext(Context);
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
            <form className={"border-top border-4 border-" + item["Status"]["Color"]} key={index}>
              <div className="detail-Info" >
                <div className="item row">
                  <p className="item-name col-3">Task Info</p>
                  <span className=" text-right col-9">
                    <p className="text-break" >
                      {item["Task Info"]}
                    </p>
                  </span>
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
                  <div className="p-2" >
                    <p className="text-break" id="memoBox">
                      {item["Memo"]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Mod-details text-center">
                <h3 className="title">Modify Details</h3>
                <div className="row">
                  <div className="row p-0 m-0">
                    <div className="form-group col-sm-3">
                      <p>
                        <label className="Label">Task Channge</label>
                      </p>
                      <button
                        className={"btn-sm fa-2x btn btn-outline-" + item["Status"]["Color"]}
                        type="button"
                        id="check"
                        data-bs-toggle="modal" data-bs-target="#taskModal" data-bs-whatever="@getbootstrap"
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
                        className={"btn-sm fa-2x btn btn-outline-" + item["Status"]["Color"]}
                        type="button"
                        id="memo"
                        data-bs-toggle="modal" data-bs-target="#memoModal" data-bs-whatever="@getbootstrap"
                      >
                        <i className="fa-solid fa-file-medical"></i>
                      </button>
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn btn-primary btn-sm py-0 px-4" onClick={(e) => actions.saveChangeDetail(e)}>
                        Save Changes
                      </button>
                    </div>
                  </div>

                  <div className="form-group col-sm-12 mt-2 p-2 m-0">
                    <h3 className="title">Navigation</h3>
                    <div className="row pl-2">
                      <div className="form-group col-sm-2 m-0 p-0">
                        <p className="m-0 text-nowrap">
                          <label className="" >Previous Task</label>
                        </p>
                        <button
                          onClick={(e) => actions.backDetail(e)}
                          className={"btn-sm btn btn-outline-" + item["Status"]["Color"]}
                          type="button"
                          id="direction"
                        >
                          <i className="fa-solid fa-angles-right fa-rotate-180"></i>
                        </button>
                      </div>
                      <div className="col-8 mt-4">
                        <Link className="mx-1 p-0" to="/todo">
                          <button type="button" className="btn btn-primary btn-sm p-2">
                            Goto Entry
                          </button>
                        </Link>

                        <Link className="mx-1 p-0" to="/table">
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
                          onClick={(e) => actions.nextDetail(e)}
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
          ))) :
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
                    className=" btn btn-outline-dark btn-sm fa-2x"
                    type="button"
                    id="check"
                    data-bs-toggle="modal" data-bs-target="#taskModal" data-bs-whatever="@getbootstrap"
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
                    <div className="col-6 mt-4">
                      <Link className="m-0 p-0" to="/todo">
                        <button type="button" className="btn btn-primary">
                          Goto Todo-List Entry
                        </button>
                      </Link>
                    </div>
                    <div className="col-6 mt-4">
                      <Link className="m-0 p-0" to="/table">
                        <button type="button" className="btn btn-primary">
                          Goto Todo-List Table
                        </button>
                      </Link>
                    </div>
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
                {useMemo(() => {
                  return store.statusArr.map((item, index) => {
                    return (
                      <div className="text-center" key={index}>
                        <label className={"p-3 col badge badge-" + item["Color"]} onClick={(e) => actions.statusChangeDetail(e)} data-bs-dismiss="modal">
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
      <div className="modal fade" id="memoModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0">
              <h1 className="col modal-title fs-5 text-center mt-2" id="exampleModalLabel">Memo Change</h1>
              <button type="button" className="btn-close my-1 mr-1" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body p-1">
              <form onSubmit={(e)=>actions.handleSubmit(e)}>
                <div className="mb-2">
                  <label htmlFor="message-text" className="col-form-label text-center mt-1">Write Memo Here:</label>
                  <textarea className="form-control" rows="10" id="message-text" onChange={(e) => actions.setHolder(e)} ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer p-1">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={(e) => actions.addMemoDetail(e)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save Memo</button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade" id="taskModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0">
              <h1 className="col modal-title fs-5 text-center mt-2" id="exampleModalLabel">Memo Change</h1>
              <button type="button" className="btn-close my-1 mr-1" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body p-1">
              <form onSubmit={(e) => actions.taskChangeDetail(e)} id="task-from" >
                <div className="mb-2">
                  <label htmlFor="recipient-name" className="col-form-label">Change Task Here:</label>
                  <input type="text" className="form-control" id="task-change" onChange={(e) => actions.setHolder(e) } onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.closest('.modal').querySelector('[data-bs-dismiss="modal"]').click()} />
                </div>
              </form>
            </div>
            <div className="modal-footer p-1">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={(e) => actions.taskChangeDetail(e)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save Task</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}