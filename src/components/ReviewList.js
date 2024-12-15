import React from "react";
const ReviewList = ({ review }) => {
  return (
    <div className="border border-gray-200 border-b-2 p-2 m-2 text-left">
      <div className="p-4 font-bold">{review.comment}</div>
      <div className="font-serif  text-pink-700">{review.date}</div>
      <div className="font-mono"> Ratings : {review.rating}🌟</div>
      <div>User Email : {review.reviewerEmail}</div>
      <div>User Name : {review.reviewerName}</div>
    </div>
  );
};

export default ReviewList;
