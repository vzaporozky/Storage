let addStorage = document.getElementById("addStorage");
let clearStorage = document.getElementById("clearStorage");
let inputText = document.getElementById("inputText");
let notes = document.getElementById("inputResult");

let cookie_name = 0;

function get_Date() {
    const date = new Date();
    let todate = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    let tomonth = date.getMonth() < 10 ? ("0" + date.getMonth()) : date.getMonth();
    let tohours = date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours();
    let tominutes = date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes();
    let tosecond = date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds();
    const date3 = ` [${todate}.${tomonth}.${date.getFullYear()}, ${tohours}:${tominutes}:${tosecond}]`;
    return date3;

}

addStorage.onclick = function getLocalStorage() {
    let textare_value = document.getElementById('inputText').value;
    if (textare_value === "") {
        alert('It\'s empty. Try to input something in "Text input"')
    } else {
        localStorage.setItem(cookie_name.toString(), textare_value + get_Date());
        if (notes.innerHTML === '[Empty]') {
            notes.innerHTML = '';
            notes.insertAdjacentHTML('beforeend', `--> ${localStorage.getItem(cookie_name.toString())}\n`);
        } else {
            notes.insertAdjacentHTML('beforeend', `--> ${localStorage.getItem(cookie_name.toString())}\n`);
        }
        cookie_name++;
    }
}

clearStorage.onclick = function StorageDelete() {
    if (confirm("Are you sure?") == true) {
        localStorage.clear();
        notes.innerHTML = '[Empty]';
    }
}

if (localStorage.length === 0) {
    notes.innerHTML = '[Empty]';
} else {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.getItem(i.toString());
        if (i === 0) {
            notes.innerHTML = `--> ${key}\n`
        } else {
            notes.innerHTML += `--> ${key}\n`
        }
    }
}