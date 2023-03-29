import React from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const [inputValue, setInputValue] = React.useState("");
	const [todos, setTodos] = React.useState([]);

  const RanInfo =() => {
    let statusArr = [
      { Status: "Pending", Color: "danger" },
      { Status: "In progress", Color: "warning" },
      { Status: "Fixed", Color: "info" },
      { Status: "Completed", Color: "success" }
    ];
    let statIndex = Math.floor(Math.random() * 4);
    let month = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "June",
      "July",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec."
    ];
    let day = Math.floor(Math.random() * 27) + 1;
    let year = "20" + (Math.floor(Math.random() * 1) + 23);
    const newRanInfo = {
      ID: Math.floor(Math.random() * Math.pow(10, 6)),
      Status: statusArr[statIndex],
      Date: `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`
    };
    return newRanInfo;
  };

  
	
	return {
		store: {
			list: [
				{
					"Task Info": "FIRST",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": "white"

				},
			],
			holder:""
				
		},
		actions: {


			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				setTodos(todos.filter((t, currenItem) => i != currenItem));
			},
		
			// checkIcon: () => {
			// 	const store = getStore()

			// 	// store.list
				
			// 	// const todo = store.list.map((elm, i) => {
			// 	// 	console.log( "todo",elm)
			// 	// })


			// 	// if (inputValue === "") {
			// 	// alert("The input cannot be empty");
			// 	// } else {
			// 	const todo = store.list.concat({hi:"hellolist"})
			// 	// setTodos(todos.concat([inputValue]));
			// 	// setInputValue("");
			// 	// }
			// 	// store
			// 	// console.log("store todo",todo)
			// 	setStore({ list: todo })
			// 	// console.log(store.list);
			// 	// console.log("This.", getStore)
			// 	// console.log("This..", getActions)
			// 	// console.log("This...", setStore)

			// },

			// checkIcon: () => {
			// 	const store = getStore();
			// 	const todo = store.list.concat({
			// 		"Task Info": "New Task",
			// 		"ID Info": "white",
			// 		"Created": "white",
			// 		"Status": "white"
			// 	});
			// 	setStore({ list: todo });
			// },
			
			// checkIcon: () => {
			// 	const store = getStore();
			// 	const Info = RanInfo()
			// 	let inf= inputValue
			// 	console.log(inputValue)
			// 	console.log(inf)
			// 	if (inputValue === "") {
			// 		alert("The input cannot be empty");
			// 	}else {
			// 		console.log(Info.Status)
			// 		console.log(inputValue)
			// 		const newObject = {
			// 			"Task Info": inputValue,
			// 			"ID Info": Info.ID,
			// 			"Created": Info.Date,
			// 			"Status": Info.Status
			// 		  };
			// 		  console.log(newObject)
			// 		  const newList = [...store.list, newObject];
			// 		  setStore({ list: newList });
			// 	}


				// const store = getStore();
				// const Info = RanInfo()
				// let inputValue = e
				// console.log(Info.Status)
				// console.log(inputValue)
				// if (inputValue === "") {
				// 	alert("The input cannot be empty");
				// 	} else {
				// 	setTodos(todos.concat([inputValue]));
				// 	setInputValue("");
				// 	}

				// const newObject = {
				//   "Task Info": inputValue,
				//   "ID Info": Info.ID,
				//   "Created": Info.Date,
				//   "Status": Info.Status
				// };
				// console.log(newObject)
				// const newList = [...store.list, newObject];
				// setStore({ list: newList });
			//},

			checkIcon: () => {
				const store = getStore();
				const Info = RanInfo();
				const inputValue = store.holder;
				console.log(inputValue);
				if (inputValue === "") {
				  alert("The input cannot be empty");
				} else {
				  const newObject = {
					"Task Info": inputValue,
					"ID Info": Info.ID,
					"Created": Info.Date,
					"Status": Info.Status,
				  };
				  console.log(newObject);
				  console.log(store);

				  const newList = [...store.list, newObject];
				  setStore({ list: newList });
				  setStore({ holder: "" }); // reset the input value after adding a new task
				}
			},
			
			setHolder: (e) => {
				if (e.target.value) {
					setStore({ holder: e.target.value });
					// e.target.value=""
				}
			},
			// getInput:()=>{
			// 	console.log(inputValue)
			// 	return inputValue
			// },


		
			// keyPress: (e) => {
			// 	if (e.key === "Enter" && inputValue === "") {
			// 	alert("The input cannot be empty");
			// 	} else if (e.key === "Enter") {
			// 	setTodos(todos.concat([inputValue]));
			// 	setInputValue("");
			// 	}
			// },
		
			
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
