import { styleCard } from "./Style";
const RestrauntCard = ({ resData }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="some-image" src={resData.thumbnail} />
      <h3>{resData.title}</h3>
      <h4>Description : {resData.description}</h4>
      <h4>Ratings : {resData.rating} 💫</h4>
      <h4>Warranty : {resData.warrantyInformation} </h4>
    </div>
  );
};

export default RestrauntCard;
