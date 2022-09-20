/** @format */

function PlaceDetails({ restau }) {
  return (
    <>
      <img src={restau.img} alt="" />
      <h1>{restau.name}</h1>
    </>
  );
}

export default PlaceDetails;
