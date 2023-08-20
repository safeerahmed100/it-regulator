// import React from 'react'

// function ContactPopUp({setShowPopup}) {
//   const [formName, setFormName] = useState('');
//   const [formEmail, setFormEmail] = useState('');
//   const [formMessage, setFormMessage] = useState('');
//   const [formValue, setFormValue] = useState(false);
//   function handleSubmit(e) {
//     e.preventDefault();
//     setFormValue(false);
//     resetValues();
//     showData();
//     setShowPopup(true);
//      setTimeout(() => {
//        setShowPopup(false)
//    }, 2500);
//   }

//   function resetValues(){
//     setFormName('');
//     setFormEmail('');
//     setFormMessage('');

//   }

//   function showData(e){
//     console.log('Name:', formName);
//     console.log('Email:', formEmail);
//     console.log('Message:', formMessage);
//     console.log('Agreement:', formValue);

//   }

//   return (
//     <div className='popupOverlay'>
//             <div className='popupContent formSubmitCard'>
//               <h1>Thank you!</h1>
//               <p>We've received your message and will respond within 24 hours.</p>
//               <p>In the meantime, make sure to follow us on social!</p>
//               <button className='btn'>Check Our Facebook</button>
//               <button className='btn'>Check Our Instagram</button>
//               <button className='btn' onClick={()=>setShowPopup(false)}>Close</button>
//               <div className='loadingBar'>
//                 <div className='loadingBarFill'></div>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default ContactPopUp



