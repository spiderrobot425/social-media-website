// Load feed from JSON
fetch('posts/posts.json')
  .then(res => res.json())
  .then(posts => {
    const feed = document.getElementById('feed');
    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <img src="${post.avatar}" class="avatar">
        <strong>@${post.username}</strong><br>
        ${post.content}<br>
        <small>${new Date(post.timestamp).toLocaleString()}</small>
      `;
      feed.appendChild(div);
    });
  });

// Transmission Console (fake)
document.getElementById('sendBtn').addEventListener('click', () => {
  const msg = document.getElementById('transmission').value.trim();
  const response = document.getElementById('responseLog');

  if (!msg) {
    response.textContent = "> Spider AI rejected the signal: No data detected.";
    return;
  }

  response.textContent = "> Webbing out transmission...";

  setTimeout(() => {
    response.textContent = [
      "> Linking to Relay Node: ArachNet-7...",
      "> Establishing silk thread...",
      "> Signal disrupted by cosmic interference.",
      "> Transmission lost. Try again later."
    ].join("\n");
    document.getElementById('transmission').value = "";
  }, 1400);
});
