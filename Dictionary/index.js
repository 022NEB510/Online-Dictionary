document.querySelector('#submit').onclick = function(){

    let username = document.querySelector('#user_name').value;
    let new_word = document.querySelector('#new_word').value;
    let definition = document.querySelector('#definition').value;
    let row = document.querySelector('#op_table').insertRow(1);

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);

    cell0.innerHTML = username;
    cell1.innerHTML = new_word;
    cell2.innerHTML = definition;
}
