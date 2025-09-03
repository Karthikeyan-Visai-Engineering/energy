import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import 'isomorphic-fetch';

export const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  try {
    // Azure Credentials
    const credential = new ClientSecretCredential(
      process.env.AZURE_TENANT_ID,
      process.env.AZURE_CLIENT_ID,
      process.env.AZURE_CLIENT_SECRET
    );

    const token = await credential.getToken("https://graph.microsoft.com/.default");

    // Graph Client
    const client = Client.init({
      authProvider: (done) => done(null, token.token),
    });

    // Send Email
    await client.api(`/users/${process.env.MS_MAIL}/sendMail`).post({

      message: {
        subject: "New Contact Form Submission",
        body: {
          contentType: "Text",
          content: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
        toRecipients: [{ emailAddress: { address: process.env.ADMIN_EMAIL } }],
      },
    });

    return { statusCode: 200, body: JSON.stringify({ message: "Email sent successfully!" }) };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
