import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Spinner = (loading) => (
  <ClockLoader size={150} color={"#fff"} loading={loading} />
);

export default Spinner;
