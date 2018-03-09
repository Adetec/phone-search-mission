var srchInput = document.getElementById('input');
var srchBtn = document.getElementById('srch-btn');
var tmp = document.getElementById('tmp');
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
            document.getElementById('result').style.display='flex';
            
            document.getElementById('pic-phone').setAttribute('src','images/'+telephone.company+'.png');
            document.getElementById("company-li").innerHTML="<b>Company</b>: "+telephone.company;
            document.getElementById("model-li").innerHTML="<b>Model</b>: "+telephone.model;
            document.getElementById("price-li").innerHTML="<b>Price</b>: $"+telephone.price;
            var inventory = telephone.stock? "In stock" : "Out of stock";
            document.getElementById("avaible-li").innerHTML="<b>available</b>: "+inventory;
            var newPhone = telephone.newProduct? "new" : "sold";
            document.getElementById('price').setAttribute('src','images/'+newPhone+'.png');
            console.log(inventory);
            document.getElementById('color-li').innerHTML="<b>Color</b>: "+telephone.color;
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