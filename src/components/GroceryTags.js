import React from "react";
const GroceryTags = ({ data, showItems, onShow }) => {
  const handleClick = () => {
    onShow();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="m-2 flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">Tags</span>
          <span>⬇️</span>
        </div>
        {showItems &&
          data.map((e, index) => {
            return (
              <span
                key={index}
                className="font-serif p-2 text-sm bg-gray-100 rounded-md"
              >
                #{e}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default GroceryTags;
