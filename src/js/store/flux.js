
const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			list: [
				// {
				// 	"Task Info": "0--",
				// 	"ID Info": 12345,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Pending", "Color": "danger" },
				// 	"Memo": "",

				// },
				// {
				// 	"Task Info": "1--",
				// 	"ID Info": 63283,
				// 	"Created": "Feb. 23, 2023",
				// 	"Status": { "Status": "Completed", "Color": "success" },
				// 	"Memo": "hello",

				// },
				// {
				// 	"Task Info": "2--",
				// 	"ID Info": 19242,
				// 	"Created": "Oct. 23, 2023",
				// 	"Status": { "Status": "Pending", "Color": "danger" },
				// 	"Memo": "",

				// },
				// {
				// 	"Task Info": "3--",
				// 	"ID Info": 17492,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Completed", "Color": "success" },
				// 	"Memo":"",

				// },
				// {
				// 	"Task Info": "4--",
				// 	"ID Info": 13793,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "Fixed", "Color": "info" },
				// 	"Memo":"",

				// },
				// {
				// 	"Task Info": "5--",
				// 	"ID Info": 91484,
				// 	"Created": "Jan. 23, 2023",
				// 	"Status": { "Status": "In progress", "Color": "warning" },
				// 	"Memo":"",

				// },
			],
			statusArr: [
				{ "Status": "Pending", "Color": "danger" },
				{ "Status": "In progress", "Color": "warning" },
				{ "Status": "Fixed", "Color": "info" },
				{ "Status": "50% Complete", "Color": "primary" },
				{ "Status": "Completed", "Color": "success" }
			],
			holder: "",
			statusIDHolder: [
				{
					"state": false,
					"ID": 0,
				}
			],
			details: [
				{
					"Task Info": "1--",
					"ID Info": 63283,
					"Created": "Feb. 23, 2023",
					"Status": { "Status": "Completed", "Color": "success" },
					"Memo": "hello",

				},
			],
			memoHolder: "",

		},
		actions: {


			// Use getActions to call a function within a fuction
			trashIcon: (i) => {
				const store = getStore();
				const newList = store.list.filter((item) => { return item != store.list[i] })
				setStore({ list: newList })
			},

			checkIcon: (e) => {
				const store = getStore();
				const Info = getActions().ranInfo();
				const inputValue = store.holder;
				const memo = store.memoHolder;

				let input1 = document.querySelector('#input1')
				if (inputValue === "") {
					alert("The input cannot be empty");
				} else {
					const newObject = {
						"Task Info": inputValue,
						"ID Info": Info.ID,
						"Created": Info.Date,
						"Status": Info.Status,
						"Memo": memo
					};


					const newList = [...store.list, newObject];
					setStore({ list: newList });
					setStore({ holder: "" }); // reset the input value after adding a new task
					setStore({ memoHolder: "" });
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
				const memo = store.memoHolder;
				const inputValue = store.holder;

				let input1 = document.querySelector('#input1')
				if (e.key === "Enter" && inputValue === "") {
					alert("The input cannot be empty");
				} else if (e.key === "Enter") {


					const newObject = {
						"Task Info": inputValue,
						"ID Info": Info.ID,
						"Created": Info.Created,
						"Status": Info.Status,
						"Memo": memo
					};



					const newList = [...store.list, newObject];
					setStore({ list: newList });
					setStore({ holder: "" }); // reset the input value after adding a new task
					setStore({ memoHolder: "" });
					input1.value = ""
				}
			},

			ranInfo: () => {
				const store = getStore();
				let statusArr = [
					{ "Status": "Pending", "Color": "danger" },
					{ "Status": "In progress", "Color": "warning" },
					{ "Status": "Fixed", "Color": "info" },
					{ "Status": "50% Complete", "Color": "primary" },
					{ "Status": "Completed", "Color": "success" }
				];
				let statIndex = Math.floor(Math.random() * statusArr.length);
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
					"ID": Math.floor(Math.random() * Math.pow(10, 6)),
					"Status": statusArr[statIndex],
					"Created": `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`,
					"Memo": ""
				};
				//Added not to spam the API
				if (store.memoHolder === "") {
					setStore({ memoHolder: "Waiting" });
					getActions().fetchData();
				}
				return newRanInfo;
			},

			fetchData: () => {
				let ranInt = Math.floor(Math.random() * 21) + 95;
				const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://asdfast.beobit.net/api/?type=word&length=' + ranInt + '&startLorem=true');
				return new Promise((resolve, reject) => {
					// Time control nod to spam the api
					setTimeout(() => {
						fetch(url)
							.then(response => response.json())
							.then(data => {
								const parsedJson = JSON.parse(data.contents);

								setStore({ memoHolder: parsedJson.text });
								resolve(parsedJson.text);
							})
							.catch(error => {
								console.error(error);
								reject(error);
							});
					}, 100); // 1 second delay

				});
			},

			ranClick: (e) => {
				const store = getStore();
				const switchValue = store.switch;
				const switchElement1 = document.querySelector("#switch");
				const switchElement2 = document.querySelector("#statusIcon");
				const status = document.querySelectorAll(".badge")

				if (e.target.id !== "switchIcon" && e.target !== switchElement1 && e.target !== switchElement2) {

					status.forEach((i) => {
						i.removeAttribute("data-bs-toggle", "modal");
						i.removeAttribute("data-bs-target", "#Modal");
						i.removeAttribute("data-bs-whatever", "@getbootstrap");
					})
					setStore({ switch: false });
					setStore({ statusIDHolder: [{ state: false, ID: 0 }] })
				} else if (switchValue === false) {

				}
			},

			reFatch: () => {
				const store = getStore();
				const actions = getActions();

				store.list.forEach(async (item, index) => {
					if (item["Memo"] === "Waiting") {
						await actions.fetchData();
						item["Memo"] = store.memoHolder
					}
				});


			},

			switchStatusButton: (e) => {
				//need code..
				const store = getStore();
				// const switchValue = store.statusIDHolder[0]["ID"];
				let status = document.querySelectorAll(".badge")

				if (e.target.parentNode.parentNode.querySelector("#switch").id === "switch") {
					status.forEach((i) => {
						i.setAttribute("data-bs-toggle", "modal");
						i.setAttribute("data-bs-target", "#Modal");
						i.setAttribute("data-bs-whatever", "@getbootstrap");
					})



					setStore({ statusIDHolder: [{ state: true, ID: 0 }] })
				}

			},
			setID: (e) => {
				const store = getStore();
				const sHolder = store.statusIDHolder[0];
				let id = e.target.parentNode.parentNode.querySelector("#ID-Info").innerText

				if (sHolder["state"] === true) {
					setStore({ statusIDHolder: [{ "state": false, "ID": id }] })

				}

			},

			statusChangeTable: (e) => {
				const store = getStore();
				const getStatus = e.target.innerText
				const getID = Number(store.statusIDHolder[0]["ID"])
				let setStatus = {}, newStatus = {};


				store.statusArr.forEach((item) => {
					if (getStatus === item["Status"]) {
						setStatus = item
					}
				})


				store.list.forEach((item) => {
					if (getID === item["ID Info"]) {
						newStatus = {
							"Task Info": item["Task Info"],
							"ID Info": item["ID Info"],
							"Created": item["Created"],
							"Status": setStatus,
							"Memo": item["Memo"]
						};
					}
				});

				const newList = store.list.map((item) => {
					if (getID === item["ID Info"]) {
						return newStatus;
					} else {
						return item;
					}
				});
				setStore({ list: newList });

			},


			displayTrash: (e) => {

				let up = document.querySelectorAll('#bUp'),
					down = document.querySelectorAll('#bDown'),
					trash = document.querySelectorAll('#bTrash')
				up.forEach((i) => {
					i.style.display = "none"
				})
				down.forEach((i) => {
					i.style.display = "none"
				})
				trash.forEach((i) => {
					i.style.display = ""
				})
			},

			displayArrow: (e) => {
				let up = document.querySelectorAll('#bUp'),
					down = document.querySelectorAll('#bDown'),
					trash = document.querySelectorAll('#bTrash')
				up.forEach((i) => {
					i.style.display = ""
				})
				down.forEach((i) => {
					i.style.display = ""
				})
				trash.forEach((i) => {
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


			gotoPage: (i) => {
				const store = getStore();
				const actions = getActions()
				let addDetails;
				store.list.map((item, index) => {

					if (item["ID Info"] === i) {

						addDetails = item
						return addDetails
					}
				})
				setStore({ details: [addDetails] });
				actions.reFatch()

			},
			ranDate: () => {
				const store = getStore();

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
				let date = `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`
				let newDate = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": date,
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newDate] });

			},

			taskChangeDetail: (e) => {
				const store = getStore();
				const inputValue = store.holder;
				const getForm = document.querySelector("#task-change")
				e.preventDefault();

				let newTask = {
					"Task Info": inputValue,
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": store.details[0]["Created"],
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newTask] });
				setStore({ holder: "" })
				getForm.value = ""

			},

			statusChangeDetail: (e) => {
				const store = getStore();
				const getStatus = e.target.innerText
				let setStatus = {};


				store.statusArr.forEach((item) => {
					if (getStatus === item["Status"]) {
						setStatus = item
					}
				})

				let newStatus = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": setStatus,
					"Created": store.details[0]["Created"],
					"Memo": store.details[0]["Memo"]
				};
				setStore({ details: [newStatus] });
			},

			addMemoDetail: () => {
				const store = getStore();
				const inputValue = store.holder;
				const getTextArea = document.querySelector("#message-text")

				let newMemo = {
					"Task Info": store.details[0]["Task Info"],
					"ID Info": store.details[0]["ID Info"],
					"Status": store.details[0]["Status"],
					"Created": store.details[0]["Created"],
					"Memo": inputValue
				};
				setStore({ holder: "" })
				setStore({ details: [newMemo] });
				getTextArea.value = ""

			},

			backDetail: () => {

				const store = getStore();
				const actions = getActions()
				const currentTask = store.details[0];
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				let setPreviousTask;

				for (let i = 0; i < store.list.length; i++) {
					if (currentTask["ID Info"] === store.list[i]["ID Info"]) {
						if (i === firstIndex) {
							setPreviousTask = store.list[lastIndex];
						} else {
							setPreviousTask = store.list[i - 1];
						}
						break;
					}
				}

				setStore({ details: [setPreviousTask] });
				actions.reFatch();

			},

			nextDetail: () => {
				const store = getStore();
				const actions = getActions()
				const firstIndex = 0;
				const lastIndex = store.list.length - 1;
				const currentTask = store.details[0];
				let setNextTask;
				store.list.forEach((item, index, arr) => {
					if (currentTask["ID Info"] === item["ID Info"]) {
						if (index === lastIndex) {
							setNextTask = arr[firstIndex];
						} else {
							setNextTask = arr[index + 1];
						}
					}
				});
				setStore({ details: [setNextTask] });
				actions.reFatch()

			},

			saveChangeDetail: () => {
				const store = getStore();
				const savedTask = store.details[0];
				const updatedList = store.list.map((item) => {
					if (savedTask["ID Info"] === item["ID Info"]) {
						return savedTask;
					} else {
						return item;
					}
				});

				setStore({ list: updatedList });
			},
		}
	};
};

export default getState;
