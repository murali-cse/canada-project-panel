import { useParams } from "react-router-dom";

const HospitalDetails = () => {
  const { id } = useParams();

  return <div>HospitalDetails {id}</div>;
};

export default HospitalDetails;
