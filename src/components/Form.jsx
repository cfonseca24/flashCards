import React from "react";
import { useState } from "react";

const Form = ({ cardAnswer, setCard }) => {
	const [postForm, setPostForm] = useState({ name: "", description: "" });

	const handleChange = (e) => {
		let newPostForm = {};
		let newValue = e.target.value;
		let key = e.target.name;
		newPostForm[key] = newValue;
		setPostForm({ ...postForm, ...newPostForm });
	};

	const handleOnSubmit = (e) => {
		console.log("IM WORKING");
		e.preventDefault();
		if (postForm.name.toLowerCase() == cardAnswer.toLowerCase()) {
			setCard(1);
			console.log("CORRECTTTTT");
			alert("✅ CORRECT ANSWER");
		} else {
			alert("❌ INCORRECT ANSWER");
		}
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<label>
					Guess the answer here:
					<input
						type="text"
						name="name"
						value={postForm.name}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Form;
