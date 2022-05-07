import { useState, useEffect } from "react";
import { MainContainer } from "../../components";
import { getImageDetails } from "../../backend";
import { useParams } from "react-router-dom";

function ImageDetails() {
  const [details, setDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getImageDetails(id)
      .then((res) => res.json())
      .then(
        (data) => {
          setDetails(data?.hits[0]);
        },
        (error) => {}
      );
  }, [id]);

  return <MainContainer></MainContainer>;
}

export default ImageDetails;
