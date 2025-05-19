async function sendMessage() {

  const input = document.getElementById("user-input");

  const chatBox = document.getElementById("chat-box");



  const userText = input.value.trim();

  if (!userText) return;



  chatBox.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

  input.value = '';

  chatBox.scrollTop = chatBox.scrollHeight;



  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

        "Authorization": "Bearer slxxxxxxxxxx"  // Public free token

      },

      body: JSON.stringify({

        // model: "mistralai/mixtral-8x7b-instruct",?

        "model": "gpt-4o-mini",

    "store": true,

        messages: [{ role: "user", content: userText }]

      })

    });



    const data = await response.json();

    const botReply = data.choices[0].message.content;



    chatBox.innerHTML += `<p><strong>AI:</strong> ${botReply}</p>`;

    chatBox.scrollTop = chatBox.scrollHeight;



  } catch (err) {

    console.error("Error:", err);

    chatBox.innerHTML += '<p><strong>AI:</strong> Sorry, something went wrong.</p>';

  }

}