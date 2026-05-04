let todos = JSON.parse(localStorage.getItem("todos")) || [];

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  todos.forEach((t, i) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="title">${t.title}</div>
      <div class="desc">${t.desc}</div>
      <button onclick="deleteTodo(${i})">Sil</button>
    `;

    // 🔥 tıklama büyüme (stabil versiyon)
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      li.classList.toggle("expanded");
    });

    list.appendChild(li);
  });
}

function addTodo() {
  const title = document.getElementById("titleInput");
  const desc = document.getElementById("descInput");

  if (!title.value.trim()) return;

  todos.push({
    title: title.value,
    desc: desc.value
  });

  title.value = "";
  desc.value = "";

  save();
  render();
}

function deleteTodo(i) {
  todos.splice(i, 1);
  save();
  render();
}

render();