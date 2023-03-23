import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (  <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div className="container-fluid">
	<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
	  <div className="ms-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
      </div>
    </div>
  </nav>);
};

