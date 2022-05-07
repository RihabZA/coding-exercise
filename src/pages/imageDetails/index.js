import { useState, useEffect } from "react";
import { MainContainer } from "../../components";
import { getImageDetails } from "../../backend";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

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

  return (
    <MainContainer>
      <div className={styles.PictureDetails}>
        <div className={styles.Col2}>
          <img
            src={details.largeImageURL}
            className={styles.Picture}
            alt={details.tags}
          />
        </div>
        <div className={styles.PictureInfo}>
          <p>Name of photographer: {details.user}</p>
          <p>Tags: {details.tags}</p>
          <p>Views: {details.views}</p>
          <p>Downloads: {details.downloads}</p>
          <p>Size: {details.imageSize}</p>
        </div>
      </div>
    </MainContainer>
  );
}

export default ImageDetails;
