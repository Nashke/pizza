var removebtn = document.getElementsByClassName('btn-danger');
for( i = 0 ; i < removebtn.length ; i++){
    removebtn[i].addEventListener('click' , removebtn)
}
function removebtn(event){
    var e = event.target;
    vat parents = e.parentElement.parentElement
    console.log(parents)
}