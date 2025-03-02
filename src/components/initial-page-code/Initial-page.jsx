import { useState } from "react";
import Input from "../Input";
import Form from "../Form";

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
  // let keys;

  // if (step < 5) {
  //   keys = Object.keys(inputsInfo[step]);
  // }

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
              <Form step={step} inputsInfo={inputsInfo} />
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
