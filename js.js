console.log(this)
var person={
    x:1,
    l:2,
    add:function (x, l){
        return this.x + this.l;
    }

}
console.log(person.add(2,3)) 


function idCard(){
    var firstName= document.getElementById('firstName');
    var lastName= document.getElementById('lastName');
    var adress= document.getElementById('adress');
    document.getElementById('PostFullName').innerHTML=firstName.value +' '+ lastName.value;
    document.getElementById('PostAdress').innerHTML= adress.value;

    var age = document.getElementById('age');
    var phoneNumber= document.getElementById('phoneNumber');

    document.getElementById('idcard').style.display='block'
    var numberArray=[];
    numberArray.push(age.value,phoneNumber.value);
    
    for (var i=0;i<numberArray.length;i++){
        if (parseInt(numberArray[i])<=100){
            document.getElementById('PostAge').innerHTML='Age:'+ numberArray[i];
        }
        
        else if(parseInt(numberArray[i])>100){
            document.getElementById('PostPhoneNumber').innerHTML='Phone Number:'+ numberArray[i];
        }
        
        

    }
    
    firstName.value && (firstName.value='');
    lastName.value && (lastName.value='');
    age.value && (age.value='');
    adress.value && (adress.value='');
    phoneNumber.value&&(phoneNumber.value='')
}
