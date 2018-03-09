var srchInput = document.getElementById('input');
var srchBtn = document.getElementById('srch-btn');
var tmp = document.getElementById('tmp');

var result = document.getElementById('result');
var price = document.getElementById('price');
var picPhone = document.getElementById('pic-phone');
var liCompany = document.getElementById("company-li");
var liModel = document.getElementById("model-li");
var liPrice = document.getElementById("price-li");
var liAvailable = document.getElementById("avaible-li");
var liColor = document.getElementById('color-li');



var phones = [
        {company:'SAMSUNG',
        model: 'Galaxy S6 edge',
        price: 225.95,
        stock: true,
        color: ['Black','White','Gold'],
        newProduct:  true
        },
    {   company:'APPLE',
        model: 'Iphone S8+',
        price: 759.99,
        stock: false,
        color: ['Black','White','grey'],
        newProduct:  false
        },
    {   company:'NOKIA',
        model: 'Asha 311',
        price: 225.95,
        stock: false,
        color: ['Black','White','red'],
        newProduct:  true
        },
    {   company:'LG',
        model: 'K4',
        price: 144.99,
        stock: true,
        color: ['Black','White','chrome'],
        newProduct:  false
        },

    

];




companies();

function companies(){
    
    var lst =[];
    phones.forEach(function(tel) {
        lst.push(tel.company.toLowerCase())
        console.log(tel.company);
        document.getElementById('lst').innerHTML="Examples: "+lst+"...";
    });
}




function searchPhone() {
    phones.forEach(function(telephone){
        
        if (srchInput.value.toUpperCase()===telephone.company){
            var inventory = telephone.stock? "In stock" : "Out of stock";
            var newPhone = telephone.newProduct? "new" : "sold";

            result.style.display='flex';

            price.setAttribute('src','images/'+newPhone+'.png');
            picPhone.setAttribute('src','images/'+telephone.company+'.png');

            liCompany.innerHTML="<b>Company</b>: "+telephone.company;
            liModel.innerHTML="<b>Model</b>: "+telephone.model;
            liPrice.innerHTML="<b>Price</b>: $"+telephone.price;
            liAvailable.innerHTML="<b>available</b>: "+inventory;
            liColor.innerHTML="<b>Color</b>: "+telephone.color;
        } else if (srchInput.value.toUpperCase()!=telephone.company) {
            document.getElementById('sorry').innerHTML="Sorry, this product is not available!";
            
        }
        
    });
}


input.addEventListener("keyup", function (){
    searchPhone();
    
});

srchBtn.addEventListener('click', function () {
   searchPhone();
})