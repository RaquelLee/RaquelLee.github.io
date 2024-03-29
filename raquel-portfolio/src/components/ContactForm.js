import React from "react";

const ContactForm = () => {
	return (
		<div className="card ">
			<div className="card-content">
				<form 
					action="https://formspree.io/f/xeqvlwwa"
					method="POST">
					<div className="row">
						<div className="input-field">
							<label>Email</label>
							<input type="email" name="_replyto" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label>
								Message
							</label>
							<textarea className="materialize-textarea" name="message"></textarea>
						</div>
					</div>
					<div className="row">
						<button className="grey darken-3 right btn waves-effect waves-light" type="submit" name="action">
							<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;