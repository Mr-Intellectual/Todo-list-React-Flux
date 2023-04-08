import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/todo.css'

import { Context } from "../store/appContext";



export default function Todo() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // actions.checkIcon();
  }, []);
  

  return (
    //Some html code should go here
    <>
    <div className="p-1 mt-2">
      <div className="p-4 mt-5">
      <div className="input-group mb-3" id="input">
        <input
          id="input1"
          type="text"
          className="form-control p-2"
          placeholder="What do you need to do...?"
          onChange={(e) => actions.setHolder(e)}
          onKeyPress={(e)=>actions.keyPress(e)}
        />
        <button
          onClick={(e)=>actions.checkIcon(e)}
          className="btn btn-outline-success"
          type="button"
          id="click"
        >
          <i className="fa-regular fa-square-check"></i>
        </button>
        {store.list.length !== 0 ? (
        <div>

        <Link className="rounded-end" to="/table" >
        <button
          className="btn btn-outline-primary p-2 rounded-0 "
          type="button"
          id="click"
        >
          <i className="fa-solid fa-share-from-square mr-2"></i>
          Goto Table 
        </button>
        </Link>
        </div>): ""}
      </div>
      <div className="input-group mb-1">
        <ul className="w-100 list-group">
          <>
          {store.list.length !== 0 ? (
              store.list.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center  border border-2 border border-primary p-2 overflow-scroll" 
                  key={index}
                >
                  {item["Task Info"]}
                  <button
                    onClick={() => actions.trashIcon(index)}
                    className=" btn btn-outline-danger btn-sm"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item d-flex justify-content-between align-items-center border border-2 border border-primary border border-3 p-2">
                Please add some task to the list...
              </li>
            )}
          </>
        </ul>
      </div>
      </div>
    </div>
    </>
  );
}