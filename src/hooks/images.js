import { useState, useEffect } from 'react'; 
import { moonImages } from '../services/spaceAPI';
// import { useHistory } from 'react-router-dom';


export const useGetSpaceImages = () => {
  // const [query, setQuery] = useState('');
  // const [searchTerm, setSearchTerm] = useState('$$'); 
  const [images, setImages] = useState({ images: [] });
  // const history = useHistory(); 


  useEffect(() => {
    moonImages()
      .then(setImages);
  }, []);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   history.pushState('/');
  //   setSearchTerm(query);
  // };

  return { images: images.images };

};
