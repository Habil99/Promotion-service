import React, { useState } from "react";
import Image from "./Image";

const CustomCheckbox = ({ logo, label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="custom-checkbox">
      <div className="custom-checkbox-logo">
        <Image source={logo} />
      </div>
      <p className="custom-checkbox-title">{label}</p>
      <div className="checkmark">
        {checked && <Image source={"/assets/images/checkmark.svg"} />}
      </div>
      <input
        onChange={() => setChecked((value) => (value = !value))}
        type="checkbox"
        hidden
      />
    </label>
  );
};

export default CustomCheckbox;
