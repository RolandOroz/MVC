import UI from "../View/ui";



export class FormUsers {
    constructor(headerArray, ) {
        this.headerArray = headerArray;
    }

    showForm(elem, elId, querySelect, text){
        UI.prototype.createEl(elem, elId, querySelect, text)
    }
}


