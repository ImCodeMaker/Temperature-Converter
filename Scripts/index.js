let CheckBox = document.getElementById('Check')
let Submit = document.getElementById('submit-btn')
let Message = document.getElementById('message')

Submit.onclick = function(){
    if (CheckBox.checked){
        Message.innerText = 'Thanks! for being suscribed :)'
    }
    else {
        Message.innerText = 'You should suscribe first!'
    }
}
