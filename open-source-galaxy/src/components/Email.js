import React from 'react';
import emailjs from '@emailjs/browser';
import { useAuth0} from '@auth0/auth0-react';


function Email(props){
    const {user, isAuthenticated} = useAuth0();
const sendEmail = () => {
 
        
      
        const templateParams = {
          to_name: user.name,
          message: props.name,
          to_email: user.email,
        };
      
        emailjs.send('service_higwl3m', 'template_jdi9qdt', templateParams, 'S4HmoP_Wf1W_5DqXf')
          .then((response) =>{
            alert("Remainder Sent Successfully!",response);
          })
          .catch((error) =>{
            alert("Error Sending Email",error);
            console.log(error);
          })
        // console.log("Email Sent!");
    };
    const info = () =>{
        alert("Login is required");
    }
    return(
        isAuthenticated ?<button onClick={sendEmail}>Set Remainder</button> : <button onClick={info}>Email</button>
    )


}

export default Email;