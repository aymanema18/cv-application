import { useState } from "react";

export default function Input({ labelText, type = "text" }) {
  const [value, setValue] = useState("");
  // console.log("inside Input");
  return (
    <label>
      {labelText}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </label>
  );
}
