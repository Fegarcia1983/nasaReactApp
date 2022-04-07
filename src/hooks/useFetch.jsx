import { useState, useEffect } from 'react';

export const useFetch = ( url ) => {

  const [state, setState] = useState( { photos: null} );

  useEffect(() => {
    fetch(url)
      .then( response => response.json())
      .then( data => {
        console.log(data);
        setState( data )
      })
  }, [url])

  return state;
}
