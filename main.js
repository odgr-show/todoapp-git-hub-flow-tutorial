const addTodo = document.querySelector("#addTodo");
const input = document.querySelector("#input");
const todoList = document.querySelector("#todoList");

addTodo.addEventListener("click", () => {
    const inputTodo = document.querySelector("#input").value;
    const li = document.createElement("li");
    li.innerHTML = `<input type='checkbox'>${inputTodo}`;
    todoList.appendChild(li);

    input.value = "";
});

document.addEventListener("change", function (e) {
    const target = e.target;
    if (target.tagName === "INPUT" && target.type === "checkbox") {
        if (target.checked) {
            target.parentNode.style.textDecoration = "line-through";
            target.parentNode.style.color = "#ccc";
        } else {
            target.parentNode.style.textDecoration = "none";
            target.parentNode.style.color = "#000";
        }
    }
});
