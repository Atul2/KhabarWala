import React, { useState } from "react";
import Home from "./layouts/Home";
import { db, fire } from "./helpers/db";

export const multiStepContext = React.createContext();

const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData([]);
   
    var user = fire.currentUser;

    finalData.map((data) => {
      db.collection("users_news_category")
        .add({ data, userId: user.uid, createdAt: new Date() })
        .then(() => {
          setStep(3)
          console.log("added")
        } );
    });
  }
  return (
    <>
      <div>
        <multiStepContext.Provider
          value={{
            currentStep,
            setStep,
            userData,
            setUserData,
            finalData,
            setFinalData,
            submitData,
          }}
        >
          {/* <Home /> */}
          {children}
        </multiStepContext.Provider>
      </div>
    </>
  );
};

export default StepContext;
