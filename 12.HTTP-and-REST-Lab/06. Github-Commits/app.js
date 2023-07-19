async function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;
  const list = document.querySelector("#commits");
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
    if (response.ok === false) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    list.innerHTML = "";

    data.forEach(({ commit }) => {
      list.innerHTML += `<li>
      ${commit.author.name}: ${commit.message}
		  </li>`;
    });
  } catch (e) {
    list.innerHTML = `Error: ${e.message} (Not Found)`;
  }
}
