import React from 'react';
import ToyCard from './ToyCard'

const toys = (props) => {
  return props.toys.map(toy => <ToyCard key={toy.id} toy={toy} deleteHandler={props.deleteHandler} likeHandler={props.likeHandler}/>)
}

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {toys(props)}
    </div>
  );
}

export default ToyContainer;
