import React from "react";
import PropTypes from "prop-types";

const Copyright = ({
  format,
  date,
  props,
}: {
  format?: string;
  date?: string;
  props?: string;
}) => {
  // Get the current year if no date is provided
  const currentYear = date
    ? new Date(date).getFullYear()
    : new Date().getFullYear();

  return (
    <div className="text-center text-lg pb-5 mx-auto">
      Copyright &#169; {format ? currentYear : currentYear} {props}
    </div>
  );
};

export default Copyright;
