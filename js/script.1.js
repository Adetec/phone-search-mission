var srchInput = document.getElementById('input');
var srchBtn = document.getElementById('srch-btn');
var phone = ['Samsung','Iphone','Nokia','Canon'];
var tmp = document.getElementById('tmp');



function searchTmp() {
    for (var i = 0; i < phone.length; i++) {
        var element = phone[i];
        if (element===srchInput.value) {
            // console.log('item '+element+' found!');
            tmp.innerHTML = 'item '+element+' found!';
        }
        else{
            // console.log(srchInput.value+', item not found!');
            // tmp.innerHTML= srchInput.value+', item not found!';
        }
    }
    // console.log(srchInput.value);
}


input.addEventListener("keyup", function (){
    searchTmp();
    
});

srchBtn.addEventListener('click', function () {
   
})