export const getSpaceImages = searchTerm => {
  return fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(json => json.collection.items.map(data => data.href));

};

export const moonImages = () => {
  return fetch('https://images-api.nasa.gov/search?q=moon')
    .then(res => res.json())
    .then(json => json.collection.items.map(data => data.href));

};
