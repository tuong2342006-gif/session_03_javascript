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

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(todo => {

        todoList.innerHTML += `
            <li>

                <input
                    type="checkbox"
                    class="toggle-btn"
                    data-id="${todo.id}"
                    ${todo.completed ? "checked" : ""}
                >

                <span
                    style="
                    text-decoration:
                    ${
                        todo.completed
                        ? "line-through"
                        : "none"
                    };
                    "
                >
                    ${todo.text}
                </span>

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
if (
    e.target.classList.contains(
        "toggle-btn"
    )
) {

    const id =
        Number(
            e.target.dataset.id
        );

    const todo =
        todos.find(
            todo => todo.id === id
        );

    todo.completed =
        !todo.completed;

    renderTodos();
}

function saveTodos() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function loadTodos() {

    const data =
        localStorage.getItem(
            "todos"
        );

    if (data) {

        todos =
            JSON.parse(data);

        renderTodos();
    }
}