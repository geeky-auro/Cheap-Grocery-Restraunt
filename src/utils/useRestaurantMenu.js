import { useEffect, useState } from "react";
const useRestaurantMenu = (grossId) => {
  const [resInfo, setResInfo] = useState(null);

  // Fetch the data...!
  // Fetch the data in the same way how we used to fetch the data from the component.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${grossId}`);
    const json = await data.json();
    // Will return array of objects which will be holding different grocery items
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
