export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "10260816e4msh4f28294e8d5b291p1e0532jsn1646f1244c67",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
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
