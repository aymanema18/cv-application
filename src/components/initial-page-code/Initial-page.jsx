import { useState } from "react";
import Input from "../Input";

const inputsInfo = [
  {
    heading: "Profile",
    labelOne: ["First name:", "text", crypto.randomUUID()],
    labelTwo: ["Last name:", "text", crypto.randomUUID()],
    labelThree: ["Address:", "text", crypto.randomUUID()],
    labelFour: ["Email:", "email", crypto.randomUUID()],
    labelFive: ["About", "textbox", crypto.randomUUID()],
  },

  {
    heading: "Experience",
    field1: {
      id: crypto.randomUUID(),
      labelOne: ["Job title:", "text", crypto.randomUUID()],
      labelTwo: ["Employer:", "text", crypto.randomUUID()],
      labelThree: ["Location:", "text", crypto.randomUUID()],
      labelFour: ["Start date:", "date", crypto.randomUUID()],
      labelFive: ["End date:", "date", crypto.randomUUID()],
      stillWorking: false,
    },
  },

  {
    heading: "Education",
    field1: {
      id: crypto.randomUUID(),
      labelOne: ["Institution:", "text", crypto.randomUUID()],
      labelTwo: ["Start date:", "date", crypto.randomUUID()],
      labelThree: ["End date:", "date", crypto.randomUUID()],
    },
  },

  {
    heading: "Skills",
    field1: {
      id: crypto.randomUUID(),
      label: ["skill:", "text", crypto.randomUUID()],
    },
  },

  {
    heading: "Additional",
    field1: {
      id: crypto.randomUUID(),
      labelOne: ["Heading:", "text", crypto.randomUUID()],
      labelTwo: ["Body:", "text", crypto.randomUUID()],
    },
  },
];

export default function InitialPage() {
  const [step, setStep] = useState(0);
  let keys;

  if (step < 5) {
    keys = Object.keys(inputsInfo[step]);
  }

  function handleCreateBtnClick() {
    const dialog = document.querySelector("dialog");
    const div = document.querySelector(".form-inputs-container > div");
    div.classList = "prf-form-container";

    dialog.showModal();
  }

  function handleNextBtnClick() {
    if (step < 4) {
      setStep(step + 1);
    }
    if (step === 4) {
      const dialog = document.querySelector("dialog");
      setStep(0);
      dialog.close();
    }
  }

  function handleBackBtnClick() {
    setStep(step - 1);
    if (step === 1) {
      const div = document.querySelector(".form-inputs-container > div");
      div.classList = "prf-form-container";
    }
  }

  function handleAddBtnClick(e) {
    e.preventDefault();
    return <Input labelText="dsf" type="text" key="dfasafasfsaf" />;
  }
  // console.log("inside InitialPage");

  return (
    <>
      <header></header>
      <main>
        <div className="h1-p-btn">
          <div className="h1-p">
            <h1>CV application</h1>
            <p>
              Create your CV today for <b>FREE</b>
            </p>
          </div>
          <button
            className="create-cv-btn"
            onClick={() => handleCreateBtnClick()}
          >
            Create cv
          </button>
        </div>
        <img src="src/images/cv-image.png" className="page-img" alt="cv" />
        <dialog>
          <div className="dialog-div">
            <div className="form-container">
              <h1 className="form-heading">{inputsInfo[step]["heading"]}</h1>
              <form action="">
                <div className="form-inputs-container">
                  <div>
                    {keys.map((key) => {
                      const div = document.querySelector(
                        ".form-inputs-container > div"
                      );
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
                              {Object.keys(inputsInfo[step][key]).map(
                                (item) => {
                                  if (
                                    typeof inputsInfo[step][key][item] ===
                                      "object" &&
                                    Array.isArray(
                                      inputsInfo[step][key][item]
                                    ) === true
                                  ) {
                                    return (
                                      <Input
                                        labelText={
                                          inputsInfo[step][key][item][0]
                                        }
                                        type={inputsInfo[step][key][item][1]}
                                        key={inputsInfo[step][key][item][2]}
                                      />
                                    );
                                  }
                                }
                              )}
                            </div>
                            <button
                              className="add-field-btn"
                              onClick={(e) => {
                                handleAddBtnClick(e);
                              }}
                            >
                              Add
                            </button>
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
            </div>
            <div className="btns-div">
              <button className="next-btn" onClick={() => handleNextBtnClick()}>
                {step === 4 ? "Create" : "Next"}
              </button>
              {step > 0 ? (
                <button
                  className="back-btn"
                  onClick={() => handleBackBtnClick()}
                >
                  Back
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </dialog>
      </main>
      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}
