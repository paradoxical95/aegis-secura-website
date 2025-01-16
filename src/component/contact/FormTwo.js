import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Your Message has been successfully sent.
        </Alert>
    )
}

const FormTwo = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_4ldwvxk", // this is my Service ID - Aegis Secura
            "template_88k2g2a", // this is my Template ID - Aegis Secura
            form.current,
            "y4RCMAoaD8rGG3gTz" // My public API Key - Aegis Secura
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="contact-name" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" required />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="tel" className="form-control" name="contact-phone" required />
        </div>
        <div className="form-group mb--40">
            <label>How can we help you?</label>
            <textarea className="form-control" name="contact-message" rows="4"></textarea>

        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Submit</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormTwo;