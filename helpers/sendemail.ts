export default function sendEmail() {
  var message = (document.getElementById("message") as HTMLInputElement).value;
  var name = (document.getElementById("name") as HTMLInputElement).value;
  var email = (document.getElementById("email") as HTMLInputElement).value;
  var apikey = process.env.NEXT_PUBLIC_API_KEY;

  if (message === "" || name === "" || email === "") {
    alert("Please fill in all fields");
    return;
  }

  const emaildata = {
    sender: {
      name: `${name} via rubenclaessens.nl`,
      email: `${email}`,
    },
    to: [
      {
        email: "claessensruben2812@gmail.com",
        name: "Ruben Claessens",
      },
    ],
    subject: "New message from portfolio!",
    htmlContent: `<!DOCTYPE html>
    <html>
      <body style="font-family: Arial, Helvetica, sans-serif">
        <p>You've got a new message from ${name}!</p>
        <table style="border: 3px solid; border-collapse: collapse">
          <tr>
            <td style="border: 3px solid; padding: 5px">Name:</td>
            <td style="border: 3px solid; padding: 5px">${name}</td>
          </tr>
          <tr>
            <td style="border: 3px solid; padding: 5px">Email:</td>
            <td style="border: 3px solid; padding: 5px">${email}</td>
          </tr>
          <tr>
            <td style="border: 3px solid; padding: 5px">Message:</td>
            <td style="border: 3px solid; padding: 5px">${message}</td>
          </tr>
        </table>
      </body>
    </html>
    `,
  };

  fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": `${apikey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(emaildata),
  });

  alert("Message sent! I'll get back to you as soon as possible!");

  var message = ((
    document.getElementById("message") as HTMLInputElement
  ).value = "");
  var name = ((document.getElementById("name") as HTMLInputElement).value = "");
  var email = ((document.getElementById("email") as HTMLInputElement).value =
    "");
}
