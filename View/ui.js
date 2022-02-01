import {userArray} from "../Model/userArray.js";

//UI class
export default class UI {
    constructor(container) {

        this.container = container;
    }

    //adding elements to HTML
    createEl(elem, elId, querySelect) {
        let el = document.createElement(elem);
        el.id = elId;
        document.querySelector(querySelect).append(el);
        return el;
    }
    //adding element class names
    addClass(querySelect, elClassName) {
        let el = document.querySelector(querySelect);
        el.className=elClassName;
        return this;
    }
    addTextToEl(querySelect, txt){
        let el = document.querySelector(querySelect);
        el.innerHTML=txt;
        return this;
    }


}


class TableUser {
    constructor(tableHeadersNamesArray, tableBodyNamesArray) {
        this.tableHeadersNamesArray = Object.keys(tableHeadersNamesArray[0]);
        this.tableBodyNamesArray = tableBodyNamesArray;
    }

    // auto table creation (table header & table body)
    init = () => {
        let divEl = document.createElement('div');
        divEl.id = 'div_dynamic_table';
        document.querySelector('body').append(divEl);
        let tableEl = document.createElement('table');
        let tableRowEl = document.createElement('tr');
        let tableHeadEl = document.createElement('thead');
        let tableBodyEl = document.createElement('tbody');


        //iterates over all strings in the tableHeadersNamesArray
        this.tableHeadersNamesArray.forEach(item => {
            let tableHeader = document.createElement('th');
            tableHeader.className = 'th_header_dynamic';
            tableHeader.innerText = item;
            tableRowEl.append(tableHeader);
        })

        tableHeadEl.append(tableRowEl);
        tableEl.append(tableHeadEl);
        tableEl.append(tableBodyEl);

        divEl.append(tableEl);

        this.tableBodyNamesArray.forEach(user => {
            let row = document.createElement('tr');
            let btn = document.createElement('button');
            btn.innerText = 'Edit';
            btn.setAttribute('class', 'edit_btn');

            Object.values(user).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);

                cell.appendChild(textNode);
                row.appendChild(cell);
                row.appendChild(btn);
            })
            tableBodyEl.appendChild(row);
        });
    }

}


class FormUsers {
    constructor() {
    }

    createEl(elem, elId, querySelect) {

        return UI.prototype.createEl(elem, elId, querySelect);
    }
    createForm(elem, elId, querySelect) {
        return UI.prototype.createEl(elem, elId, querySelect)

    }

    init(querySelEl, formId) {

        let divEl = document.querySelector(querySelEl)
        let formEl = document.createElement('form');
        formEl.id = formId;


        divEl.append(formEl);

    }
    createInputWithLabel(formId, classN, forLabel, txt) {
    let formEl = document.querySelector(formId);
    let labelEl = document.createElement('label');
    labelEl.innerHTML = txt;
    labelEl.setAttribute('for', forLabel)
    labelEl.className = classN;
    let inputEl = document.createElement('input');
    inputEl.className = classN;


    formEl.append(labelEl);
    labelEl.append(inputEl);
    }

    setAtributeToEl(querySel, attribType, attribValue, txt) {
        let el = document.querySelector(querySel);
        el.setAttribute(attribType, attribValue);
        el.innerHTML = `${txt}`;
    }

}



let uzi = new FormUsers()
uzi.createEl('div', 'formDiv', 'body')


let table = new TableUser(userArray, userArray);
table.init();


let z = new UI()
z.createEl('div', 'divBtnAdd', 'body');
z.createEl('button', 'btnAdd','#divBtnAdd');
z.addTextToEl('#btnAdd', 'Add');
z.createEl('div', 'userFormWrapper', 'body');

let formUser = new FormUsers()
formUser.init('#userFormWrapper', 'userForm')

formUser.createInputWithLabel('#userForm','formUser', 'firstName')
formUser.setAtributeToEl('.formUser', 'type', 'text', 'First Name:')
//formUser.createInputWithLabel('#userForm','formUser')
// formUser.createInputWithLabel('#userForm','formUser')
// formUser.createInputWithLabel('#userForm','formUser')
// formUser.createInputWithLabel('#userForm','formUser')












