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
function purchase(event){
    var purchase = event.target;
    var purchaseE1 = purchase.parentElement
    console.log(purchaseE1)
    var imgname = purchaseE1.children[0].src;
    var imgname = purchaseE1.children[1].innerText;
    var imgname = purchaseE1.children[2].innerText;
}
