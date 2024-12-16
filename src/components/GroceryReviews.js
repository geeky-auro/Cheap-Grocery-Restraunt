import React, { useState } from "react";
import ReviewList from "./ReviewList";
const GroceryReviews = ({ data, showItems, onShow }) => {
  console.log("WelcomeReviews");
  console.log(data);
  const handleClick = () => {
    onShow();
  };
  return (
    <div>
      {/* 
            comment : "Very unhappy with my purchase!"
            date: "2024-05-23T08:56:21.618Z"
            rating: 2
            reviewerEmail: "john.doe@x.dummyjson.com"
            reviewerName: "John Doe"
        */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">Reviews</span>
          <span>⬇️</span>
        </div>
        {showItems &&
          data?.map((review, id) => <ReviewList key={id} review={review} />)}
      </div>
    </div>
  );
};

export default GroceryReviews;
