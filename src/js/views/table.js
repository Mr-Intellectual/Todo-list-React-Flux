import React from "react";
import '../../styles/table.css'

export default function Table() {
  let [ranInfo, setRanInfo] = React.useState({});
  
  React.useEffect(() => {
//       setRanInfo({
//   ...RanInfo()
// });
  });

  function RunInfo() {
    let statusArr = [
      { Stat: "Pending", Color: "danger" },
      { Stat: "In progress", Color: "warning" },
      { Stat: "Fixed", Color: "info" },
      { Stat: "Completed", Color: "success" }
    ];
    // let statusColorArr=["danger", "warning","info","success"]
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
    return {
      ID: Math.floor(Math.random() * Math.pow(10, 6)),
      Status: statusArr[statIndex],
      // sColor:statusColorArr[statIndex],
      Date: `${month[Math.floor(Math.random() * month.length)]} ${day} ${year}`
    };
  }
  //       setRanInfo({
//   ...RanInfo()
// });
console.log("hi")
// console.log(RunInfo())
console.log("ran",ranInfo)
  return (
    //Some html code should go here
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-lg-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Todo List Table</h4>
                <p className="card-description">Fix this</p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Task Info</th>
                        <th>ID No.</th>
                        <th>Created On</th>
                        <th>Status</th>
                        <th>
                          Modify
                          <button
                            onClick={() => trash(index)}
                            className=" btn btn-outline-danger btn-sm"
                            type="button"
                            id="trash"
                          >
                            <i class="fa-sharp fa-regular fa-up-down"></i>
                          </button>
                          <button
                            onClick={() => trash(index)}
                            className=" btn btn-outline-danger btn-sm"
                            type="button"
                            id="trash"
                          >
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        </th>
                        <th>Go To Page</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Samso Park</td>
                        <td>dasas</td>
                        <td>12321</td>
                        <td>
                          <label className="badge badge-info">Pen</label>
                        </td>
                        <td>
                          <button
                            onClick={() => trash(index)}
                            className=" btn btn-outline-danger btn-sm"
                            type="button"
                            id="trash"
                          >
                            <i className="fa-sharp fa-regular fa-caret-up"></i>
                          </button>
                          <button
                            onClick={() => trash(index)}
                            className=" btn btn-outline-danger btn-sm"
                            type="button"
                            id="trash"
                          >
                            <i className="fa-sharp fa-regular fa-caret-down"></i>
                          </button>
                        </td>
                        <td>Go To Link Page for details</td>
                        {/*</tr>
                      <tr>
                        <td>Marlo Sanki</td>
                        <td>53425532</td>
                        <td>15 May 2015</td>
                        <td>
                          <label class="badge badge-warning">
                            In progress
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>John ryte</td>
                        <td>53275533</td>
                        <td>14 May 2017</td>
                        <td>
                          <label class="badge badge-info">Fixed</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Peter mark</td>
                        <td>53275534</td>
                        <td>16 May 2017</td>
                        <td>
                          <label class="badge badge-success">Completed</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>53275535</td>
                        <td>20 May 2017</td>
                        <td>
                          <label class="badge badge-warning">
                            In progress
                          </label>
                        </td>*/}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
