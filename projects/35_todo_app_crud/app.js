const todoInput =
    document.getElementById("todoInput");

const addBtn =
    document.getElementById("addBtn");

const todoList =
    document.getElementById("todoList");

let todos = [];

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        todoList.innerHTML += `
            <li>
                ${todo.text}
            </li>
        `;
    });
}

addBtn.addEventListener("click", () => {

    const text =
        todoInput.value.trim();

    if (!text) return;

    todos.unshift({
        id: Date.now(),
        text,
        completed: false
    });

    todoInput.value = "";

    renderTodos();
});

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        todoList.innerHTML += `
            <li>

                ${todo.text}

                <button
                    class="delete-btn"
                    data-id="${todo.id}"
                >
                    Delete
                </button>

            </li>
        `;
    });
}

todoList.addEventListener("click", (e) => {

    if (
        e.target.classList.contains(
            "delete-btn"
        )
    ) {

        const id =
            Number(
                e.target.dataset.id
            );

        todos =
            todos.filter(
                todo => todo.id !== id
            );

        renderTodos();
    }
});