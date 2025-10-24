var input = document.getElementById("new-task");
var botao = document.getElementById("addTask");
var listaAFazer = document.querySelector(".todo-list ul");
var listaFeitas = document.querySelector(".complete-list ul");

listaAFazer.innerHTML = "";
listaFeitas.innerHTML = "";

botao.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
  var texto = input.value;

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");

  checkbox.type = "checkbox";
  label.textContent = texto;

  li.appendChild(checkbox);
  li.appendChild(label);

  listaAFazer.appendChild(li);

  input.value = "";

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      moverParaFeitas(li, texto);
    }
  });
}

function moverParaFeitas(item, texto) {
  listaAFazer.removeChild(item);

  var liFeita = document.createElement("li");
  var textoFeita = document.createTextNode(texto + " ");
  var botaoApagar = document.createElement("button");

  botaoApagar.textContent = "Apagar";
  botaoApagar.className = "delete";

  liFeita.appendChild(textoFeita);
  liFeita.appendChild(botaoApagar);

  listaFeitas.appendChild(liFeita);

  botaoApagar.addEventListener("click", function() {
    listaFeitas.removeChild(liFeita);
  });
}
