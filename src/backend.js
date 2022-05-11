const baseUrl =
  "https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15";

/*Get list of images filtered based on user-provided parameters*/
const getListImage = (params) => {
  return fetch(
    `${baseUrl}&q=${params.search_term}&safesearch=true&order=${params.order}&image_type=${params.image_type}&category=${params.category}&orientation=${params.orientation}&colors=${params.colors}&per_page=${params.per_page}&page=${params.page}`
  );
};

/*Get information about an image*/
const getImageDetails = (id) => {
  return fetch(`${baseUrl}&id=${id}`);
};

export { getListImage, getImageDetails };
