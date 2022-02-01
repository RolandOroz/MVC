import {userArray} from "../Model/userArray.js";

//UI class
export default class UI {
    constructor(container) {

        this.container = container;
    }

    //adding elements to HTML
    createEl(elem, elId, querySelect, text) {
        let el = document.createElement(elem);
        el.id = elId;
        el.innerHTML = text;
        document.querySelector(querySelect).append(el);
        return el;
    }
    //adding element class names
    addClass(querySelect, elClassName) {
        let el = document.querySelector(querySelect);
        el.className=elClassName;
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



let table = new TableUser(userArray, userArray);
table.init();



let z = new UI()
z.createEl('div', 'divAdd', '#test', 'divADD');













