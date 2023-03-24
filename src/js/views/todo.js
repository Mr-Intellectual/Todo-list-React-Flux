import React from "react";


export default function Todo({
  check,
  getInput,
  setInput,
  press,
  trash,
  children,
}) {
  return (
    //Some html code should go here
    <>
      <div className="input-group mb-3" id="input">
        <input
          type="text"
          className="form-control p-2"
          placeholder="What do you need to do...?"
          onChange={(e) => setInput(e.target.value)}
          value={getInput}
          onKeyPress={press}
        />
        <button
          onClick={check}
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
            {children.length !== 0 ? (
              children.map((item, index, arr) => (
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