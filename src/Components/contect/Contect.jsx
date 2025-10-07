import React from 'react'
import './Contect.css'
import message_icon from '../../assets/message-icon.png'
import email_icon from '../../assets/email-icon.png'
import phone_icon from '../../assets/phonecall-icon.png'
import location_icon from '../../assets/location-icon.png'
import black_arrow from '../../assets/black_arrow.png'
import { toast } from "react-toastify"
const Contect = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) =>{
    event.preventDefault();
    
    setResult("sending....");
    
    const formData = new FormData(event.target);

    formData.append("access_key", "2c4876cc-80f5-41c3-801e-86351e218823");

    const res = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      body: formData

    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res)
      setResult(res.message);
      event.target.reset();
      toast.success("user massage send successfully");
      
    }
    else {
      console.log("Error", res)
      setResult(res.message);


    }
    
  }
  return (
    <div className='contect'>
        <div className='contect-col'>

            <h3>Send us a message 
              <img src={message_icon} alt="" /> </h3>
           <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
              <ul>
                <li><img src={email_icon} alt="" /> schoolm5263@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +91 825294****</li>
                <li> <img src={location_icon} alt="" /> Deori,uttar pradesh,india</li>
                
              </ul>

        </div>
        <div className='contect-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='Phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your massagge' required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={black_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
         
        </div>
           
    </div>
  )
}

export default Contect