const getState = ({ getStore, getActions, setStore }) => {

	
	return {
		store: {
			list: [
				{
					"Task Info": "0--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
				{
					"Task Info": "1--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
				{
					"Task Info": "2--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
				{
					"Task Info": "3--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
				{
					"Task Info": "4--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
				{
					"Task Info": "5--",
					"ID Info": 12345,
					"Created": "Jan. 23, 2023",
					"Status": { "Status": "Pending", "Color": "danger" },

				},
			],
			holder:"",
			switch: false,
				
		},
		actions: {


			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				const store = getStore();
				const newList = store.list.filter((item) => {return item != store.list[i]})
				setStore({ list: newList })
			},
		
			checkIcon: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.holder;
				// console.log(inputValue);
				 let input1 = e.target.parentNode.querySelector('#input1')
				//  console.log("fdfvjh",input1.value)
				if (inputValue === "") {
				  alert("The input cannot be empty");
				} else {
				  const newObject = {
					"Task Info": inputValue,
					"ID Info": Info.ID,
					"Created": Info.Date,
					"Status": Info.Status,
				  };
				//   console.log(newObject);
				//   console.log(store);

				  const newList = [...store.list, newObject];
				  setStore({ list: newList });
				  setStore({ holder: "" }); // reset the input value after adding a new task
				//   console.log(e.target.parentNode.querySelector('#input1'))
				}
				input1.value = ""
			},
			
			setHolder: (e) => {
				if (e.target.value) {
					setStore({ holder: e.target.value });
				}
			},

			keyPress: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.holder;
				// console.log(inputValue);
				 let input1 = e.target.parentNode.querySelector('#input1')
				if (e.key === "Enter" && inputValue === "") {
				  alert("The input cannot be empty");
				} else if (e.key === "Enter"){
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
				input1.value = ""
				}
			},

			ranInfo:()=>{
				let statusArr = [
					{ "Status": "Pending", "Color": "danger" },
					{ "Status": "In progress", "Color": "warning" },
					{ "Status": "Fixed", "Color": "info" },
					{ "Status": "Completed", "Color": "success" }
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
			},
			ranClick: (e) => {
				const store = getStore();
				const switchValue = store.switch;
				const switchElement1 = document.querySelector("#switch");
				const switchElement2 = document.querySelector("#statusIcon");
				const status =document.querySelectorAll(".badge")
			
				if (e.target.id !== "switchIcon" && e.target !== switchElement1 && e.target !== switchElement2) {
					
					status.forEach((i)=>{
						i.removeAttribute("data-bs-toggle", "modal");
						i.removeAttribute("data-bs-target", "#Modal");
						i.removeAttribute("data-bs-whatever", "@getbootstrap");
					})
					setStore({ switch: false });
				}else if(switchValue === false){
					// console.log("its false")
				}
			},
			
			switchStatusButton:(e)=>{
				//need code..
				const store = getStore();
				const switchValue = store.switch;
				let statusButton = false,
				status =document.querySelectorAll(".badge")

				if(e.target.parentNode.parentNode.querySelector("#switch").id === "switch"){
					status.forEach((i)=>{
						i.setAttribute("data-bs-toggle", "modal");
						i.setAttribute("data-bs-target", "#Modal");
						i.setAttribute("data-bs-whatever", "@getbootstrap");
						i.innerHTML += `<div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
						  <div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Create a new post</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						  </div>
						  <div className="modal-body">
						  </div>
						</div>
					  </div>
					</div>`
					console.log(i.innerText)
					})
					
					statusButton = true
					setStore({ switch: statusButton })
				}
			},
			statusIcon:(e)=>{
				const store = getStore();
				const switchValue = store.switch;

			// 	e.target.innerHTML += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			// 	<div class="modal-dialog modal-dialog-centered">
			// 	  <div class="modal-content">
			// 		<div class="modal-header">
			// 		  <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new post</h1>
			// 		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			// 		</div>
			// 		<div class="modal-body">
			// 		</div>
			// 	  </div>
			// 	</div>
			//   </div>`
				const className = e.target.attributes
			
				console.log(className)

				let statusArr = [
					{ "Status": "Pending", "Color": "danger" },
					{ "Status": "In progress", "Color": "warning" },
					{ "Status": "Fixed", "Color": "info" },
					{ "Status": "Completed", "Color": "success" }
				];
				if(switchValue === true){
					// document.querySelector("#statusIcon").parent.innerHTML +=`<div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    				// 	     <div className="modal-dialog modal-dialog-centered">
					// 	 	<div className="modal-content">
					// 	 	  <div className="modal-header">
					// 	 		<h1 className="modal-title fs-5" id="exampleModalLabel">Create a new post</h1>
					// 	 		<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					// 	 	  </div>
					// 	 	  <div className="modal-body">
					// 	 	  </div>
					// 	 	</div>
					// 	   </div>
					// 	 </div>`
					console.log(document.querySelector("#statusIcon").parentNode)
					console.log(e.target)
					// setStore({ switch: false })

				}
			},
			
			displayTrash:(e)=>{

				let up = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#bUp'),
				down = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#bDown'),
				trash = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#bTrash')
				up.forEach((i)=>{
					i.style.display = "none"
				})
				down.forEach((i)=>{
					i.style.display = "none"
				}) 
				trash.forEach((i)=>{
					i.style.display = ""
				})
			},

			displayArrow:(e)=>{
				let up = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#bUp'),
				down = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#bDown'),
				trash = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('#bTrash')
				up.forEach((i)=>{
					i.style.display = ""
				})
				down.forEach((i)=>{
					i.style.display = ""
				}) 
				trash.forEach((i)=>{
					i.style.display = "none"
				})
			},
			moveItemUp: (i) => {
				const store = getStore();
				const lastIndex = store.list.length - 1;
				const newList = store.list.map((item, index, arr) => {
				  if (index === i - 1) {
					return arr[i];
				  } else if (index === i) {
					if (index === 0) {
					  return arr[lastIndex];
					} else {
					  return arr[i - 1];
					}
				  } else if (index === lastIndex && i === 0) {
					return arr[i];
				  } else {
					return item;
				  }
				});
				setStore({ list: newList });
			  },
			  
			  moveItemDown: (i) => {
				const store = getStore();
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				const newList = store.list.map((item, index, arr) => {
				  if (index === i + 1) {
					return arr[i];
				  } else if (index === i) {
					if (index === lastIndex) {
					  return arr[firstIndex];
					} else {
					  return arr[i + 1];
					}
				  } else if (index === firstIndex && i === lastIndex) {
					return arr[i];
				  } else {
					return item;
				  }
				});
				setStore({ list: newList });
			  },
			  
			  
			gotoPage:(i)=>{
				console.log("page", i)
			},
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
