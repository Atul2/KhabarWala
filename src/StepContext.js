import React, { useState, useEffect } from "react";
import Home from "./layouts/Home";
import { withRouter, useHistory } from "react-router-dom";
import { db, fire } from "./helpers/db";
import { Redirect, Route } from "react-router";


export const multiStepContext = React.createContext();

const StepContext = ({ children, props }) => {
  const [currentStep, setStep] = useState(0);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [innerdata, setInnerData] = useState([]);
  const [getId, setGetId] = useState("");

  const [docID, setDocID] = useState("");
  const [userID, setUserID] = useState("");
  const [documentID, setDocumentID] = useState('')
  const [send, setSend] = useState('')
  const history = useHistory();
  function submitData() {

    var user = fire.currentUser;
    setFinalData((finalData) => [...finalData, userData]);
    setUserData([]);


    if (docID === '') {
      finalData.map((data) => {
        db.collection("users_news_category")
          .add({ category: data.category, newsitem: data.newsitem, userId: user.uid, createdAt: new Date() })
          .then(() => {

            console.log("added")

          });
      });

    }

  }




  function UpdateNews() {
    var user = fire.currentUser;
    setFinalData((finalData) => [...finalData, userData]);
    setUserData([]);
    try {
      finalData.map((data) => {
        db.collection("users_news_category").doc(docID)
          .update({ newsitem: data.newsitem, userId: user.uid, createdAt: new Date() })
          .then(() => {
            console.log("news updated..");

            history.goBack();


          });
      });
    } catch (error) {
      console.log("error=>", error)
    }


  }


  function UpdateCategory() {
    var user = fire.currentUser;
    setFinalData((finalData) => [...finalData, userData]);
    setUserData([]);
    try {
      finalData.map((data) => {
        db.collection("users_news_category").doc(docID)
          .update({ category: data.category, userId: user.uid, createdAt: new Date() })
          .then(() => {
            console.log("category updated..");

            history.goBack();


          });
      });
    } catch (error) {
      console.log("error=>", error)
    }


  }

  // useEffect(() => {
  //   db.collection("users_news_category").onSnapshot((snapshot) => {
  //     setInnerData(
  //       snapshot.docs.map((doc) => (console.log("fire base data=--->",doc.data().data.category[0])

  //       ))
  //     )


  //   });
  // }, []);




  useEffect(() => {
    if (innerdata.length < 1) {
      db.collection("users_news_category").where("userId", "==", userID).onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setInnerData(doc.data());
          setDocID(doc.id);
        }

        )
      });
    }



    fun();

  }, [userID, currentStep])


  console.log("steptext--", innerdata);

  const fun = () => {

    fire.onAuthStateChanged((user) => {
      if (user) {

        setUserID(user.uid);
      }
    });

  }


  return (
    <>
      <div>
        <multiStepContext.Provider
          value={{
            UpdateNews,
            innerdata,
            UpdateCategory,
            currentStep,
            send,
            setSend,
            setStep,
            userData,
            userID,
            docID,
            setUserData,
            finalData,
            setFinalData,
            submitData,
            getId,
            setGetId

          }}
        >
          {/* <Home /> */}
          {children}
        </multiStepContext.Provider>
      </div>
    </>
  );
};

export default withRouter(StepContext);
