import React from "react";
import './styles.scss';
import PageHeaderContent from "../../components/navBar/pageHeader";
import {BsInfoCircleFill} from 'react-icons/bs';
import Swal from 'sweetalert2'


const Contact=()=> {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "219e3e05-d6f3-4726-a1eb-ba476efd913a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return(
       
        <section id="contact" className="contact">

            <PageHeaderContent
            headerText = "Contact Page"
            icon={<BsInfoCircleFill size={40}/>}
            />

            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label className="label">Full Name</label>
                    <input type="text" className="field" name="name" placeholder="Enter your name" required/>

                </div>

                <div className="input-box">
                    <label className="label">Email Address</label>
                    <input type="text" className="field" name="email" placeholder="Enter your email" required/>

                </div>

                <div className="input-box">
                    <label className="label">Your Message</label>
                    <textarea name="message" id="" className="field" placeholder="Enter your message" required></textarea>

                </div>

                <button type="submit">Send Message</button>



            </form>

            <span>{result}</span>

        </section>

    );

}

export default Contact;