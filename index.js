// ESERCIZIO 2 //
let listaPersone = [
  (P1 = {
    name: "Jack",
    surname: "Spa",
    age: 32,
  }),
  (P2 = {
    name: "Jhon",
    surname: "Row",
    age: 25,
  }),
  (P3 = {
    name: "Michael",
    surname: "Arrow",
    age: 45,
  }),
  (P4 = {
    name: "Cristano",
    surname: "Ronaldo",
    age: 39,
  }),
  (P5 = {
    name: "Lionel",
    surname: "Messi",
    age: 34,
  }),
  (P6 = {
    name: "Maurizio",
    surname: "Costanzo",
    age: 30,
  }),
  (P7 = {
    name: "Pep",
    surname: "Rino",
    age: 15,
  }),
  (P8 = {
    name: "Manuel",
    surname: "Arco",
    age: 98,
  }),
  (P9 = {
    name: "Giuseppe",
    surname: "Eppesuig",
    age: 65,
  }),
  (P10 = {
    name: "Nicola",
    surname: "Mandarino",
    age: 45,
  }),
  (P11 = {
    name: "Armando",
    surname: "Mando",
    age: 74,
  }),
  (P12 = {
    name: "Chiara",
    surname: "Sparrow",
    age: 66,
  }),
  (P13 = {
    name: "Maria",
    surname: "Sparrow",
    age: 33,
  }),
];

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
  listaPersone.push(newPerson);
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
