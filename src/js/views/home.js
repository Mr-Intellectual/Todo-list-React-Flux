import React from "react";

export const Home = (props) => (



	
	// 	<div class="p-5 mb-4 bg-light rounded-3">
	// 	<div class="container-fluid py-5">
	// 	  <h1 class="display-5 fw-bold">Welcome to the ToDo List!</h1>
	// 	  <button class="btn btn-primary btn-lg" type="button">Go to My ToDo List</button>
	// 	</div>
	//   </div>
	<div className="px-3 my-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-3">
        <h1 className="display-5 fw-bold my-3" id="title">Welcome to the ToDo List!</h1>
        <p className="col-md-12 fs-4 mx-auto my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni vel aliquid, natus laudantium a beatae adipisci ab quam soluta pariatur, blanditiis totam corrupti sint suscipit! Dolor nam perferendis voluptatibus.
        </p>
        <button className="btn btn-primary btn-lg float-center mt-5 mb-3" type="button">
        Click Here Start Entering Into The ToDo List
        </button>
      </div>
    </div>
	  
);
// import React from "react";

//include images into your bundle
import Todo from "./todo.js";

//create your first component
// const Home = () => {


// 	<div class="p-5 mb-4 bg-light rounded-3">
//  		<div class="container-fluid py-5">
//  		  <h1 class="display-5 fw-bold">Welcome to the ToDo List!</h1>
//  		  <button class="btn btn-primary btn-lg" type="button">Go to My ToDo List</button>
//  		</div>
//  	  </div>
// //   const [inputValue, setInputValue] = React.useState("");
// //   const [todos, setTodos] = React.useState([]);

// //   const trashIcon = (i) => {
// //     setTodos(todos.filter((t, currenItem) => i != currenItem));
// //   };

// //   const checkIcon = () => {
// //     if (inputValue === "") {
// //       alert("The input cannot be empty");
// //     } else {
// //       setTodos(todos.concat([inputValue]));
// //       setInputValue("");
// //     }
// //   };

// //   const keyPress = (e) => {
// //     if (e.key === "Enter" && inputValue === "") {
// //       alert("The input cannot be empty");
// //     } else if (e.key === "Enter") {
// //       setTodos(todos.concat([inputValue]));
// //       setInputValue("");
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center m-3">Todo List</h1>
// //       <Todo
// //         check={checkIcon}
// //         getInput={inputValue}
// //         setInput={setInputValue}
// //         press={keyPress}
// //         trash={trashIcon}
// //         setTodo={setTodos}
// //       >
// //         {todos}
// //       </Todo>
// //       <div className="text-center m-3">{todos.length} Tasks</div>
// //     </div>
// //   );
// };

// export default  Home;



