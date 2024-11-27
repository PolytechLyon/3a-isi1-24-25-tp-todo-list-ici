let addButton = document.getElementById("new-todo-item-add");
let todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function (){
    let li = document.createElement("li");

    let span=document.createElement("span")
    span.textContent = document.getElementById("new-todo-item-title").value;
    let edit = document.createElement("button")
    edit.className="edit-button"
    edit.textContent ="Edit";
    let suppr = document.createElement("button")
    suppr.textContent="Delete";
    suppr.className="delete-button"

    li.append(span);
    li.append(suppr)
    li.append(edit)

    todoList.append(li);
});

todoList.addEventListener("click", function (e) {
    if (e.target.className === "delete-button") {
        e.target.parentElement.remove();
    } else if (e.target.className === "edit-button") {
        let currentElement = e.target.parentElement;
        document.getElementById("edit-todo-item-title").value = currentElement.children[0].textContent;

        toggleHidden(true)

        document.getElementById("edit-todo-item-confirm").onclick = function() {
            currentElement.children[0].textContent = document.getElementById("edit-todo-item-title").value;

            toggleHidden(false)
        }

        document.getElementById("edit-todo-item-cancel").onclick = function() {
            toggleHidden(false)
        }
    }
});

function toggleHidden(bool) {
    document.getElementById("new-item").hidden = bool
    document.getElementById("edit-item").hidden = !bool
}
