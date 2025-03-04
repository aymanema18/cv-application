import { useState } from "react";
import Input from "./Input";

export default function Form({ step, inputsInfo, cvData }) {
  let [fieldsNum, setFieldsNum] = useState(1);

  let keys = Object.keys(inputsInfo[step]);

  function handleAddBtnClick(e) {
    let temp;
    e.preventDefault();
    if (keys.length - 1 < 3) {
      let n =
        Object.keys(inputsInfo[step]).at(-1).substring(0, 5) +
        add1(Object.keys(inputsInfo[step]).at(-1).substring(5));
      temp = inputsInfo[step][n] = structuredClone(
        inputsInfo[step][`${Object.keys(inputsInfo[step]).at(-1)}`]
      );

      temp.id = crypto.randomUUID();

      cvData[step][n] = structuredClone(
        cvData[step][`${Object.keys(cvData[step]).at(-1)}`]
      );
      console.log(cvData);
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
        <div className="field form-inputs-container-lvl-two">
          {keys.map((key) => {
            // if (inputsInfo[step][key] === "Profile") {
            //   Object.keys(inputsInfo[step]["field"]).map((key) => {
            //     return (
            //       <Input
            //         labelText={inputsInfo[step]["field"][key][0]}
            //         type={inputsInfo[step]["field"][key][1]}
            //         key={inputsInfo[step]["field"][key][2]}
            //       />
            //     );
            //   });
            // } else
            if (
              typeof inputsInfo[step][key] === "object" &&
              Array.isArray(inputsInfo[step][key]) === false
            ) {
              return (
                <>
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
                          step={step}
                          cvData={cvData}
                          keyValue={key}
                        />
                      );
                    }
                  })}
                  {/* {keys.at(-1) === key && key !== "field" ? (
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
                  )} */}
                </>
              );
            }

            // if (
            //   typeof inputsInfo[step][key] === "object" &&
            //   Array.isArray(inputsInfo[step][key]) === true
            // ) {
            //   return (
            //     <Input
            //       labelText={inputsInfo[step][key][0]}
            //       type={inputsInfo[step][key][1]}
            //       key={inputsInfo[step][key][2]}
            //     />
            //   );
            // }
          })}
        </div>
        {!keys.includes("field") ? (
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
      </div>
    </form>
  );
}
