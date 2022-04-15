import React from "react";
import NumberFormat from "react-number-format";

const FormatRupiah = (props: { nominal: number }) => {
  const { nominal } = props;
  return (
    <NumberFormat
      value={nominal}
      displayType={"text"}
      thousandSeparator="."
      decimalSeparator=","
      prefix={"Rp "}
    />
  );
};

export default FormatRupiah;
