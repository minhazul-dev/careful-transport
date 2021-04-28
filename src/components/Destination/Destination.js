import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../Map/Map";
import { Form } from 'react-bootstrap';

const Destination = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [toggled, toggle] = useState(false);
  useEffect(() => {
    const url = `https://www.json-generator.com/api/json/get/caDMRPLgUi?indent=2`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);

  const allDetails = details.find((detail) => id == detail.id);
  console.log(allDetails);

  //All functionalities of maps

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="From"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="To"
            />
          </div>

          
          <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            {/* <Form.Label>Select Date</Form.Label> */}
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
            <div className="app">
            
            {toggled && (
              <img
                style={{ height: "120px", width: "120px" }}
                src={allDetails?.image}
                alt=""
              />
            )}
          </div>

          <button
            className="btn btn-outline-success mt-4 mb-4"
            onClick={() => toggle((toggled) => !toggled)}
          >
            {" "}
            Search
          </button>
          
        </div>

        <div className="col-md-6">
          <Map></Map>
        </div>
      </div>
    </div>
  );
};

export default Destination;
