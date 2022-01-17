var removebtn = document.getElementsByClassName('btn-danger');
for( i = 0 ; i < removebtn.length ; i++){
    removebtn[i].addEventListener('click' , removebtn)
}
function removebtn(event){
    var e = event.target;
    vat parents = e.parentElement.parentElement.remove()
    console.log(parents)
}

var purchase = document.getElementsByClassName('btn-primary');
for( i = 0 ; i < removebtn.length ; i++){
    removebtn[i].addEventListener('click' , removebtn)
}

