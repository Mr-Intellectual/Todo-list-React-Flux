import React, { useContext, useEffect } from "react";
import '../../styles/todo.css'

import { Context } from "../store/appContext";



export default function Todo({
  check,
  getInput,
  setInput,
  press,
  trash,
  children,
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // actions.checkIcon();
  }, []);
  

  // console.log(actions.checkIcon())
  
  // actions.checkIcon()
  // console.log(store.list)
  // console.log(inputValue)
  

  return (
    //Some html code should go here
    <>


{/* {store.list.map((item, index) => {
						
              <li
                className="list-group-item d-flex justify-content-between align-items-center  border border-2 border border-primary"
                key={index}
              >
                {item}
                <button
                  onClick={() => trash(index)}
                  className=" btn btn-outline-danger btn-sm"
                  type="button"
                  id="trash"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </li>




            console.log(item)
            <li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
				})} */}
      <div className="input-group mb-3" id="input">
        <input
          type="text"
          className="form-control p-2"
          placeholder="What do you need to do...?"
          onChange={(e) => actions.setHolder(e)}
          // value={store.}
          onKeyPress={press}
        />
        <button
          onClick={actions.checkIcon}
          className="btn btn-outline-success"
          type="button"
          id="click"
        >
          <i className="fa-regular fa-square-check"></i>
        </button>
      </div>
      <div className="input-group mb-1">
        <ul className="w-100 list-group">
          <>
          {store.list.length !== 0 ? (
              store.list.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center  border border-2 border border-primary"
                  key={index}
                >
                  {item["Task Info"]}
                  <button
                    onClick={() => trash(index)}
                    className=" btn btn-outline-danger btn-sm"
                    type="button"
                    id="trash"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item d-flex justify-content-between align-items-center border border-2 border border-primary border border-3">
                Please add some task to the list...
              </li>
            )}
          </>
        </ul>
      </div>
    </>
  );
}












// {children.length !== 0 ? (
//   children.map((item, index, arr) => (
//     <li
//       className="list-group-item d-flex justify-content-between align-items-center  border border-2 border border-primary"
//       key={index}
//     >
//       {item}
//       <button
//         onClick={() => trash(index)}
//         className=" btn btn-outline-danger btn-sm"
//         type="button"
//         id="trash"
//       >
//         <i className="fa-regular fa-trash-can"></i>
//       </button>
//     </li>
//   ))
// ) : (
//   <li className="list-group-item d-flex justify-content-between align-items-center border border-2 border border-primary border border-3">
//     Please add some task to the list...
//   </li>
// )}