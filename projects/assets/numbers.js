function isEven(){
    //Accessing the Number 1 input and getting the value of that input
    const num = document.getElementById('input-box-1').value;
    console.log(num);

    //num%2===0 checks if even
    //num%1===0 checks if a whole number
    //num%2!==0 checks if an odd number
if(num%2===0 && num%1===0){
    alert(num + ' is EVEN!')

}else if(num%2!==0 && num%1===0) {
    alert(num+' is ODD!')
}else{
    alert('ENTER A WHOLE NUMBER')
}
}


function calculateSum(){
    // We must get the values from both input boxes

    const num1 = document.getElementById('input-box-1').value

    const num2 = document.getElementById('input-box-2').value


    // calculate sum of the values

    const sum = Number(num1) + Number(num2);

    // show the result in the correct place: <div id="show-sum"></div>
    //alert(sum);
    // we need to aasign this sum to this element <div id="show-sum"></div>

    document.getElementById('show-sum').innerHTML = 'The sum is: ' + sum;


}

function calculateProduct(){
    const num1=document.getElementById('input-box-1').value;
    const num2=document.getElementById('input-box-2').value;
    const product = Number(num1) * Number (num2);
    document.getElementById('show-product').innerHTML = 'The product is: ' +product;
}

