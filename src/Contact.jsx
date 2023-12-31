import React, { useState } from "react";

const Contact = () => {

	const [data, setData] = useState({
		fullname: '',
		phone: '',
		email: '',
		msg: '',
	});


	const inputEvent = (e) => {
		const { name, value } = e.target;
		setData((preval) => {
			return {
				...preval,
				[name]: value,
			}
		})

	}
	const formSubmit = (e) => {
		e.preventDefault();
		alert(
			`My name is ${data.fullname}. My mobile number is ${data.phone}. and email is ${data.email}, Here is what I want to say ${data.msg}`
		);
	}


	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Contact Us</h1>
			</div>
			<div className="container contact_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">

						<form onSubmit={formSubmit}>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">FullName </label>
								<input
									type="text"
									class="form-control"
									id="exampleInputEmail1"
									name="fullname"
									value={data.fullname}
									onChange={inputEvent}
									placeholder="Enter Your Name" />
							</div>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Phone</label>
								<input type="number"
									class="form-control"
									id="exampleInputEmail1"
									name="phone"
									value={data.phone}
									onChange={inputEvent}
									placeholder="Mobile Number"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Email address</label>
								<input
									type="email"
									class="form-control"
									name="email"
									value={data.email}
									onChange={inputEvent}
									id="exampleInputEmail1" />
							</div>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label"> Message</label>
								<textarea
									class="form-control"
									id="exampleInputEmail1"
									name="msg"
									value={data.msg}
									onChange={inputEvent}
									rows='3' />
							</div>
							<div className="col-12">
								<button type="submit" class="btn btn-outline-primary">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;