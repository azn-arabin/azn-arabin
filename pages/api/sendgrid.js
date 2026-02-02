import sendgrid from "@sendgrid/mail";
import { htmlCode, validateInputs } from "@/lib/helpers/sendgrid";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: { message: "Method Not Allowed." },
    });
  }

  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const configuredKey = process.env.NEXT_PUBLIC_SENDGRID_AUTHENTICATION_KEY;

  // In dev or when no key is configured, allow the request; otherwise enforce match
  if (configuredKey && token !== configuredKey) {
    return res.status(401).json({ error: { message: "Unauthenticated" } });
  }

  const { name, email, subject, message } = req.body || {};
  const errors = validateInputs({ name, email, subject, message });

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    await sendgrid.send({
      to: process.env.SENDGRID_RECEIVER,
      from: process.env.SENDGRID_SENDER,
      subject,
      html: htmlCode(name, email, message),
    });

    return res.status(200).json({
      message:
        "Your email has been sent successfully. Thank you for contacting us.",
    });
  } catch (error) {
    return res
      .status(error?.statusCode || 500)
      .json({ message: "Something went wrong! Please try again later." });
  }
};

export default sendEmail;
