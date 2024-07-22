import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
const key1 = process.env.EMAILJS_SERVICE_ID;
const key2 = process.env.EMAILJS_TEMPLATE_ID;
const key3 = process.env.EMAILJS_PUBLIC_KEY;
// try {
//   await emailjs.send(
//     "YOUR_SERVICE_ID",
//     "YOUR_TEMPLATE_ID",
//     {},
//     {
//       publicKey: "YOUR_PUBLIC_KEY",
//     }
//   );
//   console.log("SUCCESS!");
// } catch (err) {
//   if (err instanceof EmailJSResponseStatus) {
//     console.log("EMAILJS FAILED...", err);
//     return;
//   }

//   console.log("ERROR", err);
// }

const templateParams = {
  name: "James",
  notes: "Check this out!",
};

emailjs
  .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, {
    publicKey: "YOUR_PUBLIC_KEY",
  })
  .then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );