import React from 'react'

function IdCard(props) {

  return (
    <div>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Height: {props.height}</p>
      <p>{props.birth.toString()}</p>
      <p></p>
      <img src=""></img>
    </div>
  )

}

export default IdCard;