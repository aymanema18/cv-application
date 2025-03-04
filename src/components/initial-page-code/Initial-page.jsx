import { useState } from "react";
import Input from "../Input";
import Form from "../Form";

const inputsInfo = [
  {
    heading: "Profile",
    field: {
      labelOne: ["First name:", "text", crypto.randomUUID()],
      labelTwo: ["Last name:", "text", crypto.randomUUID()],
      labelThree: ["Address:", "text", crypto.randomUUID()],
      labelFour: ["Email:", "email", crypto.randomUUID()],
      labelFive: ["About:", "textbox", crypto.randomUUID()],
    },
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
      stillWorking: true,
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

const cvData = [];

function makeKey(name) {
  name = name.toLowerCase();
  if (name.split("").includes(" ")) {
    name = name.split("");
    name[name.indexOf(" ") + 1] = name[name.indexOf(" ") + 1].toUpperCase();
    name.splice(name.indexOf(" "), 1);
    name = name.join("");
  }
  return name;
}
let i = 0;
inputsInfo.forEach((item) => {
  // if (item.heading === "Profile") {
  //   cvData.push({ heading: "Profile" });
  //   Object.keys(item).map((key) => {
  //     if (key === "heading") {
  //       // do nothing
  //     } else {
  //       let temp = makeKey(item[key][0]);
  //       temp = temp.split("");
  //       temp.pop();
  //       temp = temp.join("");
  //       cvData[i][temp] = "";
  //     }
  //   });
  //   i++;
  // } else {
  // }
  cvData.push({ heading: item.heading });
  Object.keys(item).map((key) => {
    if (key === "heading") {
      // do nothing
    } else {
      Object.keys(item[key]).map((keyTwo) => {
        if (Array.isArray(item[key][keyTwo])) {
          let temp = makeKey(item[key][keyTwo][0]);
          temp = temp.split("");
          temp.pop();
          temp = temp.join("");
          cvData[i][key] = { ...cvData[i][key] };
          cvData[i][key][temp] = "";
        }
      });
    }
  });
  i++;
});

// const cvData = [
//   {
//     heading: "Profile",
//   },
//   { heading: "Experience", field1: {} },
//   { heading: "Education", field1: {} },
//   { heading: "Skills", field1: {} },
//   { heading: "Additional", field1: {} },
// ];

export default function InitialPage() {
  const [step, setStep] = useState(0);
  // let keys;

  // if (step < 5) {
  //   keys = Object.keys(inputsInfo[step]);
  // }

  function handleCreateBtnClick() {
    const dialog = document.querySelector("dialog");
    // const div = document.querySelector(".form-inputs-container > div");
    // div.classList = "prf-form-container";

    dialog.showModal();
  }

  function handleNextBtnClick() {
    // if (step === 3) {
    //   const div = document.querySelector(".form-inputs-container-lvl-two");

    //   div.classList = "additional-form-container";
    // } else {
    //   const div = document.querySelector(".additional-form-container");
    //   if (div !== null) div.classList = "form-inputs-container-lvl-two";
    // }

    // if (step === 2) {
    //   const div = document.querySelector(".form-inputs-container-lvl-two");

    //   div.classList = "skill-form-container";
    // } else {
    //   const div = document.querySelector(".skill-form-container");
    //   if (div !== null) div.classList = "form-inputs-container-lvl-two";
    // }

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
      // const div = document.querySelector(".form-inputs-container > div");
      // div.classList = "prf-form-container";
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
              <Form step={step} inputsInfo={inputsInfo} cvData={cvData} />
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
