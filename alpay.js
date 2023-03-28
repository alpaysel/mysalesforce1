String priceOfShirt = '$12.99';
String priceOfShoes = '$23.99';
String shirt = priceOfShirt.replace('$','');
Decimal shirtPrice = Decimal.valueOf(shirt);
String shoes = priceOfShoes.replace('$', '');
Decimal shoesPrice = Decimal.valueOf(shoes);
System.debug(shirtPrice + shoesPrice);

Integer n = 8;
if(n<10){
    System.debug('Small');
}

Integer n = 12;
if(n<0){
    System.debug('negative');
}
if(n==0){
    System.debug('Neutre');
}
if(n>0){
    System.debug('Positive');
}