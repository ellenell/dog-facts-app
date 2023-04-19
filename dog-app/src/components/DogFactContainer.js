import React, { useState, useEffect } from 'react'
import './App.css';
import DogFactDisplay from './DogFactDisplay';

const DogFactContainer = () => {

  const [dogfact, setDogfact] = useState(null)
  const [hasDogfact, setHasDogfact] = useState(false)

  const getDogFact = async () => {
    const response = await fetch('https://dogapi.dog/api/v2/facts');
    // PARSE JSON RESPONSE INTO JS OBJECT
    const data = await response.json();
    // set the question state to data
    console.log('response', response);
    console.log('data', data);

    if (data.data[0].length >= 0) {
      setHasDogfact(true)
      setDogfact(data.data[0]);
      console.log('dogfact:', dogfact)
    }

  }


  useEffect(() => {
    getDogFact();
  }, []);
  return (
    <>
      <button className='questionButton' onClick={getDogFact}>Get Question</button>
      { hasDogfact &&
        <>
          <div> I have a dog fact</div>
          <DogFactDisplay
            props={dogfact}
          />
        </>
      }

      {/* <DogFactDisplay
        props={dogfact}
      /> */}
    </>
  );
}

export default DogFactContainer;
