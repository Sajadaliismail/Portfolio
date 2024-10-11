import React from "react";
import PropTypes from "prop-types";

const Copyright = ({
  format,
  date,
  children,
}: {
  format?: string;
  date?: string;
  children?: string;
}) => {
  // Get the current year if no date is provided
  const currentYear = date
    ? new Date(date).getFullYear()
    : new Date().getFullYear();

  return (
    <div className="text-center text-lg pb-5 mx-auto">
      Copyright &#169; {format ? currentYear : currentYear} {children}
    </div>
  );
};

export default Copyright;
