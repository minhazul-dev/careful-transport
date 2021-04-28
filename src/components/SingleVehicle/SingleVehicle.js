import React, { Fragment } from "react";
import { useHistory } from "react-router";

const SingleVehicle = (props) => {
  // console.log(props)
  const { first_name, id, image } = props.vehicle;
  // console.log(first_name)
  const history = useHistory();
  const showDetails = (id) => {
    const url = `/destination/${id}`;
    history.push(url);
  };

  return (
    <div
      onClick={() => showDetails(id)}
      className="card m-3 mt-5"
      style={{ width: "18rem" }}
    >
      <img src={image} class="img-thumbnail" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title"></h5>
        <h6 className="card-subtitle mb-2 text-muted">{first_name}</h6>
      </div>
    </div>
  );
};

export default SingleVehicle;
