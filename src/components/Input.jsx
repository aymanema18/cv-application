import { useState } from "react";

export default function Input({
  labelText,
  type = "text",
  step,
  cvData,
  keyValue,
}) {
  const [value, setValue] = useState(
    cvData[step][keyValue][makeKey(labelText)]
  );
  // console.log("inside Input");
  function makeKey(name) {
    name = name.toLowerCase();
    if (name.split("").includes(" ")) {
      name = name.split("");
      name[name.indexOf(" ") + 1] = name[name.indexOf(" ") + 1].toUpperCase();
      name.splice(name.indexOf(" "), 1);
      name = name.join("");
    }
    if (name.split("").at(-1) === ":") {
      name = name.split("");
      name.pop();
      name = name.join("");
    }
    return name;
  }

  function handleOnChange(e) {
    setValue(e.target.value);

    cvData[step][keyValue][makeKey(labelText)] = e.target.value;
  }

  return (
    <label>
      {labelText}
      <input
        type={type}
        value={value}
        onChange={(e) => handleOnChange(e)}
      ></input>
    </label>
  );
}
