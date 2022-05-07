import { useState, useEffect } from "react";
import { MainContainer, Select } from "../../components";
import {
  order,
  imageType,
  categories,
  orientations,
  colors,
} from "../../assets/constants";
import { getListImage } from "../../backend";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function ImageList() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  /*Initialize filters*/
  const [params, setParams] = useState({
    search_term: "",
    image_type: "all",
    orientation: "all",
    category: "",
    colors: "",
    order: "popular",
    per_page: 20,
  });

  const perPage = [
    { value: 20, label: 20 },
    { value: 40, label: 40 },
    { value: 60, label: 60 },
    { value: 80, label: 80 },
    { value: 100, label: 100 },
    { value: 120, label: 120 },
    { value: 140, label: 140 },
    { value: 160, label: 160 },
    { value: 180, label: 180 },
    { value: 200, label: 200 },
  ];

  const handleChange = (key) => (e) => {
    return setParams({
      ...params,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    getListImage(params)
      .then((res) => res.json())
      .then(
        (data) => {
          setImages(data?.hits);
        },
        (error) => {}
      );
  }, [params]);

  return (
    <MainContainer>
      <div className={styles.SearchBox}>
        <input
          type="text"
          placeholder="Search images..."
          className={styles.SearchBar}
          onChange={handleChange("search_term")}
          value={params.search_term}
        />
        <div className={styles.FiltersBox}>
          <Select
            placeholder="Order"
            options={order}
            onChange={handleChange("order")}
            value={params.order}
            className={styles.Filter}
          />
          <Select
            placeholder="Images"
            options={imageType}
            onChange={handleChange("image_type")}
            value={params.image_type}
            className={styles.Filter}
          />
          <Select
            placeholder="Category"
            options={categories}
            onChange={handleChange("category")}
            value={params.category}
            className={styles.Filter}
          />
          <Select
            placeholder="Orientation"
            options={orientations}
            onChange={handleChange("orientation")}
            value={params.orientation}
            className={styles.Filter}
          />
          <Select
            placeholder="Colors"
            options={colors}
            onChange={handleChange("colors")}
            value={params.colors}
            className={styles.Filter}
          />
        </div>
      </div>
      <div className={styles.ImageContainer}>
        {/*Select number of entries to display*/}
        <div className={styles.Counter}>
          <p>Show &nbsp;</p>
          <Select
            placeholder="nb"
            options={perPage}
            onChange={handleChange("per_page")}
            value={params.per_page}
            className={styles.PerPage}
          />
          <p>&nbsp;entries</p>
        </div>
        <div className={styles.Row}>
          {/*Display images*/}
          {images.map((image) => (
            <div
              className={styles.Col}
              key={image.id}
              onClick={() => {
                navigate("images/" + image.id);
              }}
            >
              <img src={image.previewURL} alt={image.tags} />
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default ImageList;
