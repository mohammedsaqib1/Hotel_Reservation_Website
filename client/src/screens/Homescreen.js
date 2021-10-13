import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, setError] = useState();
  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("api/rooms/getallrooms")).data;

      setrooms(data);
      setloading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setloading(false);
    }
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader/>
        ) : rooms.length>1 ? (
          rooms.map((room) => {
            return <div className="col-md-9 mt-2">
                <Room room={room}/>
            </div>;
          })
        ) : (<Error/>)
        }
      </div>
    </div>
  );
}

export default Homescreen;
