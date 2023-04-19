import React, { useState, useEffect } from 'react'


const DogFactDisplay = (props) => {

  const dogfactSentence = props.attribues.body

  return (
    <>
 
      <p>Question: {dogfactSentence}</p>
        <br />

    </>
  );
}

export default DogFactDisplay;
