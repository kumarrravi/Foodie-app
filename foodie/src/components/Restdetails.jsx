import React,{useState} from "react";
import restaurentlist from "../restaurents";
import Items from "./Items";


function Restdetails(props){
  const currentRest= restaurentlist.filter(restaurent => restaurent.id===props.restId);
  const {id,name,address,imgurl,description,rating,itemList}=currentRest[0];

  return (
    <div className="Restdetail">
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
      <p className="address">{address} </p>
      <button className="rating">{rating}⭐</button>
      <hr className="line-hr"/>
      <h3 style={{color:"rgb(237, 90, 107)"}}>  Order Online </h3>
      {itemList.map(item => {
        return (<Items item={item} />);
      })}

    </div>
  );
}

export default Restdetails;
