//Url api
export const API_URL="https://itunes.apple.com";

//Cors
export const CORS_PREFIX = "https://cors-anywhere.herokuapp.com/";


export const isOutOfDate = timestamp => {
    const oneday = 60 * 60 * 24 * 1000 // milisegundos en 1 día
    const now = Date.now();
    return now - timestamp > oneday;
  }