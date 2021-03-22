import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { db, fire } from "./helpers/db";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const multiStepContext = React.createContext();

const StepContext = ({ children, props }) => {

	const [currentStep, setStep] = useState(0);
	const [secondStep, setSecondStep] = useState("");
	const [userData, setUserData] = useState([]);
	const [finalData, setFinalData] = useState([]);
	const [innerdata, setInnerData] = useState([]);
	const [getId, setGetId] = useState("");
	const [docID, setDocID] = useState("");
	const [userID, setUserID] = useState("");
	const [send, setSend] = useState("");
	const history = useHistory();

	function submitData() {

		var user = fire.currentUser;
		setFinalData((finalData) => [...finalData, userData]);
		setUserData([]);

		if (docID === "") {
			finalData.map((data) => {
				db.collection("users_news_category")
					.add({
						category: data.category,
						newsitem: data.newsitem,
						userId: user.uid,
						createdAt: new Date(),
					})
					.then(() => {
						toast.success("User selected news and category successfully..");
						console.log("added");
						window.location.reload();
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


				db.collection("users_news_category")
					.doc(docID)
					.update(Object.assign({ createdAt: new Date() }, data))
					.then(() => {
						console.log("news updated..");

						toast.success("news updated successfully..");
						history.goBack();
					});
			});
		} catch (error) {
			window.location.reload();
			history.goBack();
			console.log("error=>", error);
		}
	}

	function UpdateCategory() {
		var user = fire.currentUser;
		setFinalData((finalData) => [...finalData, userData]);

		try {
			finalData.map((data) => {
				db.collection("users_news_category")
					.doc(docID)
					.update(Object.assign({ createdAt: new Date() }, data))
					.then(() => {
						console.log("category updated..");
						toast.success("category updated successfully..");
						history.goBack();
					});
			});
		} catch (error) {
			window.location.reload();
			history.goBack();
			console.log("error=>", error);
		}
	}

	useEffect(() => {
		if (innerdata.length < 1) {
			db.collection("users_news_category")
				.where("userId", "==", userID)
				.onSnapshot((snapshot) => {
					snapshot.docs.map((doc) => {
						setInnerData(doc.data());
						setDocID(doc.id);
					});
				});
		}
		fun();
	}, [userID, currentStep, innerdata]);

	const fun = () => {
		fire.onAuthStateChanged((user) => {
			if (user) {
				setUserID(user.uid);
			}
		});
	};

	return (
		<>
			<div>
				<multiStepContext.Provider
					value={{
						secondStep,
						setSecondStep,
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
						setGetId,
					}}
				>
					{/* <Home /> */}
					{children}
					{<ToastContainer />}
				</multiStepContext.Provider>
			</div>
		</>
	);
};

export default withRouter(StepContext);
