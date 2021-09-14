import React,{useState} from "react";


function Items(props){
  const curritem=props.item;
  const {itemId,itemName,itemImg,itemPrice,itemRating,itemDescription}=curritem;
  console.log(itemPrice);
  return (
    <div className="item-container">
      <img alt="item-img" src={itemImg} className="item-img"/>
      <div className="item-detail">
        <h4 className="item-header">{itemName}</h4>
        <div className="rating-container">
        {[...Array(itemRating)].map((e,i) => {
          return(<span key={i}><img alt="star" className="item-rating-star-yellow" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/298/star_2b50.png" /> </span>)
        })
        }
        {[...Array(5-itemRating)].map((e,i) => {
          return(<span key={i}><img alt="star" className="item-rating-star-white" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/docomo/205/white-medium-star_2b50.png" /> </span>)
        })
        }
        </div>
        <p className="item-price">₹{itemPrice}</p>
        <p className="item-description">{itemDescription}</p>
        <button className="add-item-btn btn"> ADD +</button>
      </div>
    </div>
  )
}




export default Items;
