const API_URL = "http://localhost:5000/api/tarefas";

// LISTAR TAREFAS
async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        list.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm border-0">

          <div class="card-body">
            <h5 class="card-title">${task.nome}</h5>
            <p class="card-text">${task.descricao || "Sem descrição"}</p>

            ${task.status
                ? `<span class="badge bg-success">✔ Concluída</span>`
                : `<span class="badge bg-warning text-dark">⏳ Pendente</span>`
            }

            <div class="mt-3 d-flex gap-2">

              <button class="btn btn-sm btn-outline-primary"
                onclick="editTask(${task.id}, '${task.nome}', \`${task.descricao || ''}\`)">
                Editar
              </button>

              <button class="btn btn-sm btn-outline-danger"
                onclick="deleteTask(${task.id})">
                Excluir
              </button>

              ${!task.status ? `
                <button class="btn btn-sm btn-success"
                  onclick="markAsDone(${task.id}, '${task.nome}', \`${task.descricao || ''}\`)">
                  ✔ Concluir
                </button>
              ` : ``}

            </div>

          </div>
        </div>
      </div>
    `;
    });
}

// SALVAR (CRIAR / EDITAR)
async function saveTask() {
    const id = document.getElementById("taskId").value;
    const nome = document.getElementById("taskName").value;
    const descricao = document.getElementById("taskDesc").value;

    const data = { nome, descricao };

    if (id) {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, status: false })
        });
    } else {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    }

    bootstrap.Modal.getInstance(document.getElementById("taskModal")).hide();
    clearForm();
    loadTasks();
}

// EDITAR
function editTask(id, nome, descricao) {
    document.getElementById("taskId").value = id;
    document.getElementById("taskName").value = nome;
    document.getElementById("taskDesc").value = descricao;

    new bootstrap.Modal(document.getElementById("taskModal")).show();
}

// EXCLUIR
async function deleteTask(id) {
    if (!confirm("Deseja realmente excluir esta tarefa?")) return;

    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks();
}

// CONCLUIR TAREFA
async function markAsDone(id, nome, descricao) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome,
            descricao,
            status: true
        })
    });

    loadTasks();
}

// LIMPAR FORM
function clearForm() {
    document.getElementById("taskId").value = "";
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
}

// INIT
loadTasks();
