import emailjs from "@emailjs/browser";

const sendMail = async ({
  name = "",
  email = "",
  message = "",
  recipientEmail = "sakariyahabdulhazeem@gmail.com",
  subject,
}) => {
  const templateParams = {
    name: name,
    email: email,
    message: message,
    recipient_email: recipientEmail,
    subject: subject,
  };

  try {
    const response = await emailjs.send(
      "service_k4ccfbp",
      "template_gxfpa56",
      templateParams,
      "pfpa-BHAVDMTtEYcc"
    );
    return { status: response.status, text: response.text };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendMail;
