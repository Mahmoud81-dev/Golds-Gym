export const exerciseOptions = {
method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ef79bd6e4msh2182cc4c74cad3dp156f25jsn5b546fc569b6",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  }
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "13d9219ff4mshacf3695e7fbc7cep14f1efjsndb0a9e018f23",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
