import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Home() {
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
          {res? res : "Ger adipisci felisq praesent nec anunc mauris aenean cras. Dum ulum nascetur uam sque liquam primis tdonec auris. Lla lisis ullam nulla consequa eger porttit mattisae liberout suspendi. Liberos cubilia sociosqu mauris disse leocur ante quam. Mollis rutrum metusqui liberoa facili mi erat. Nec tfusce tasse ellus lobortis turpisut neque nunc mauris. Tortorp quiscras ibulum insuspen esent miproin culus. Mus himena volutpa eratfus tsed estnunc laut fames. Sim que inceptos atein orciduis malesu metusves nunccras dictumst iam. Magna enimphas ullam auctorpr rsed bibendu puruscra. Elemen lus iain eroscu molestie leopelle ecenas fermen. Pretium ulum estmorbi justov nequen loremnul snam. Vehicula ecenas usce setiam ulum sellus nullain miin non."}
        </p>
        <Link to="/todo">
          <button className="btn btn-primary btn-lg float-center mt-5 mb-3" type="button">
            Click Here Start Entering Into The ToDo List
          </button>
        </Link>
      </div>
    </div>)
}

