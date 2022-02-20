import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Sendemail = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hz1c304",
        "template_w0tkaep",
        form.current,
        "user_7gisq653kSdNlR2N8T5P6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Sendemail;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Sendemail = () => {
//   const [email, setemail] = useState("");
//   const form = useRef();
//   let link = "www.google.com";

//   let templateParams = {
//     from_name: "yashraut361@gmail.com",
//     to_name: email,
//     subject: "New Link From Weshare",
//     message_html: link,
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log(templateParams);
//     emailjs
//       .sendForm(
//         "service_hz1c304",
//         "template_w0tkaep",
//         templateParams,
//         "user_7gisq653kSdNlR2N8T5P6"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text, "error");
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Email</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(event) => setemail(event.target.value)}
//       />

//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default Sendemail;
