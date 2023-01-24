// ESERCIZIO 2 - work in progress //
let listaPersone = [
  (P = {
    name: "Jack",
    surname: "Spa",
    age: 32,
  }),
  (P = {
    name: "Jhon",
    surname: "Row",
    age: 25,
  }),
  (P = {
    name: "Michael",
    surname: "Arrow",
    age: 45,
  }),
  (P = {
    name: "Cristano",
    surname: "Ronaldo",
    age: 39,
  }),
  (P = {
    name: "Lionel",
    surname: "Messi",
    age: 34,
  }),
  (P = {
    name: "Maurizio",
    surname: "Costanzo",
    age: 30,
  }),
  (P = {
    name: "Pep",
    surname: "Rino",
    age: 15,
  }),
  (P = {
    name: "Manuel",
    surname: "Arco",
    age: 98,
  }),
  (P = {
    name: "Giuseppe",
    surname: "Eppesuig",
    age: 65,
  }),
  (P = {
    name: "Nicola",
    surname: "Mandarino",
    age: 45,
  }),
  (P = {
    name: "Armando",
    surname: "Mando",
    age: 74,
  }),
  (P = {
    name: "Chiara",
    surname: "Sparrow",
    age: 66,
  }),
  (P = {
    name: "Maria",
    surname: "Sparrow",
    age: 33,
  }),
];

for (i = 0; i < listaPersone.length; i++) {
  let newElement = document.getElementById("table");
  let colonnaNome = document.createElement("td");
  let colonnaCognome = document.createElement("td");
  let colonnaData = document.createElement("td");
  colonnaNome.innerHTML = listaPersone[i].name;
  colonnaCognome.innerHTML = listaPersone[i].surname;
  colonnaData.innerHTML = listaPersone[i].date;
  newTr.appendChild(colonnaNome);
  newTr.appendChild(colonnaCognome);
  newTr.appendChild(colonnaData);
  newElement.appendChild(newTr);
}

const Person = function (nome, cognome, data) {
  this.name = nome;
  this.surname = cognome;
  this.date = data;
};

function inserisciButton() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let data = document.getElementById("data").value;
  let newElement = document.getElementById("table");

  let newPerson = new Person(nome, cognome, data);
  let newTr = document.createElement("tr");
  let colonnaNome = document.createElement("td");
  let colonnaCognome = document.createElement("td");
  let colonnaData = document.createElement("td");

  colonnaNome.innerHTML = newPerson.name;
  colonnaCognome.innerHTML = newPerson.surname;
  colonnaData.innerHTML = newPerson.date;
  newTr.appendChild(colonnaNome);
  newTr.appendChild(colonnaCognome);
  newTr.appendChild(colonnaData);

  newElement.appendChild(newTr);

  newElement.style.display = "block";
}
