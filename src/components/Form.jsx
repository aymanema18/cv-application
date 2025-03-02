import { useState } from "react";
import Input from "./Input";

export default function Form({ step, inputsInfo }) {
  let [fieldsNum, setFieldsNum] = useState(1);

  let keys = Object.keys(inputsInfo[step]);

  function handleAddBtnClick(e) {
    let temp;
    e.preventDefault();
    if (keys.length - 1 < 3) {
      temp = inputsInfo[step][
        `${
          Object.keys(inputsInfo[step]).at(-1).substring(0, 5) +
          add1(Object.keys(inputsInfo[step]).at(-1).substring(5))
        }`
      ] = structuredClone(
        inputsInfo[step][`${Object.keys(inputsInfo[step]).at(-1)}`]
      );

      temp.id = crypto.randomUUID();

      setFieldsNum(fieldsNum + 1);
    }
  }
  // finish from here tomorrow

  function add1(num) {
    return Number(num) + 1;
  }

  return (
    <form action="">
      <div className="form-inputs-container">
        <div>
          {keys.map((key) => {
            const div = document.querySelector(".form-inputs-container > div");
            if (
              typeof inputsInfo[step][key] === "object" &&
              Array.isArray(inputsInfo[step][key]) === false
            ) {
              div.classList = "";
              return (
                <>
                  <div
                    className="field form-inputs-container-lvl-two"
                    key={inputsInfo[step][key]["id"]}
                  >
                    {Object.keys(inputsInfo[step][key]).map((item) => {
                      if (
                        typeof inputsInfo[step][key][item] === "object" &&
                        Array.isArray(inputsInfo[step][key][item]) === true
                      ) {
                        return (
                          <Input
                            labelText={inputsInfo[step][key][item][0]}
                            type={inputsInfo[step][key][item][1]}
                            key={inputsInfo[step][key][item][2]}
                          />
                        );
                      }
                    })}
                  </div>
                  {keys.at(-1) === key ? (
                    <button
                      className="add-field-btn"
                      onClick={(e) => {
                        handleAddBtnClick(e);
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    ""
                  )}
                </>
              );
            }

            if (
              typeof inputsInfo[step][key] === "object" &&
              Array.isArray(inputsInfo[step][key]) === true
            ) {
              return (
                <Input
                  labelText={inputsInfo[step][key][0]}
                  type={inputsInfo[step][key][1]}
                  key={inputsInfo[step][key][2]}
                />
              );
            }
          })}
        </div>
      </div>
    </form>
  );
}
