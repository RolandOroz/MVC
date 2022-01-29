import User from '/Controller/userObj.js'

const user = new User();

class Form {
    constructor(appendTo, formId, inputClassN, btnClassN) {
        this.form = document.createElement('form');
        this.form.id=formId;
        document.querySelector(appendTo).append(this.form);
        //using object values as placeholders and iteration length
        Object.keys(user).forEach(item => {
            let inputs = document.createElement('input');
            inputs.className = inputClassN;
            inputs.placeholder = item;
            this.form.append(inputs);
        })

        this.btn = document.createElement('button');
        this.btn.className=btnClassN;
        this.form.append(this.btn);
    }
}



window.addEventListener('load', function () {
    let uForm = new Form('#pop', 'userFormDyna', 'userFormDyna_inputs')

    console.log(uForm)
})