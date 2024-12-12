import { styleCard } from "./Style";
const RestrauntCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg" style={styleCard}>
      <img className="rounded-lg" src={resData.thumbnail} />
      <h3 className="font-bold py-4 text-lg">{resData.title}</h3>
      <h4>Description : {resData.description}</h4>
      <h4>Ratings : {resData.rating} 💫</h4>
      <h4>Warranty : {resData.warrantyInformation} </h4>
    </div>
  );
};

export default RestrauntCard;
