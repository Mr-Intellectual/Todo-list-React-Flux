import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Home (){
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.fetchData(); // Call the API when the component mounts
  }, []);
  let res = store.memoHolder
  

  return ( 
    <div className="px-3 my-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold my-3" id="title">Welcome to the ToDo List!</h1>
        <p className="col-md-12 fs-4 mx-auto my-4" id="homeDisplay">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni vel aliquid, natus laudantium a beatae adipisci ab quam soluta pariatur, blanditiis totam corrupti sint suscipit! Dolor nam perferendis voluptatibus. */}
        {res}
        </p>
        <Link to="/todo">
          <button className="btn btn-primary btn-lg float-center mt-5 mb-3" type="button">
            Click Here Start Entering Into The ToDo List
          </button>
        </Link>
      </div>
    </div> )
}

