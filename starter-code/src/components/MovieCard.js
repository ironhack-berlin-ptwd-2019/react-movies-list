import React from 'react';

export const MovieCard = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Director: {props.director}</p>
      <button onClick={props.deleteClick}>Delete this movie</button>
    </div>
  )
};

