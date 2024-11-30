import { styleCard } from "./Style";
const RestrauntCard = ({ resData }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="some-image" src={resData.imageUrl} />
      <h3>{resData.name}</h3>
      <h4>Cuisines : {resData.cuisines}</h4>
      <h4>Ratings : {resData.ratings} 💫</h4>
      <h4>{resData.time} Minutes</h4>
    </div>
  );
};

export default RestrauntCard;
