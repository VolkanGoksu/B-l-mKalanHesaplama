
function durum(){
    let girilenSayi=Number(document.getElementById("sayi").value);
    if(girilenSayi%3==0 && girilenSayi%5==0){
        document.getElementById("sonuc").innerHTML="Sayiniz 3 ve 5 e tam bölünüyor. ";
    }
    else{
        document.getElementById("sonuc").innerHTML="Sayi 3 ve 5 e tam bölünmüyor.";
    }
    
    
}
function kalanYaz(){
    let girilenSayi=Number(document.getElementById("sayi").value);

     if(girilenSayi%3==0 && girilenSayi%5==0)
    {
        let sonuc = 0;
        document.getElementById("sonuc2").innerHTML="Sayiniz 5 e ve 3 e tam bölünüyor kalan : " + sonuc; 
    }
    else if(girilenSayi%3==0){
        
        let sonuc=girilenSayi/3 ;
        document.getElementById("sonuc2").innerHTML="Sayiniz 3 e tam bölünüyor ve bölümünden kalan : " + sonuc ;
    }
    else if(girilenSayi%5==0){
        let sonuc=girilenSayi/5;
        document.getElementById("sonuc2").innerHTML="Sayiniz 5 e tam bölünüyor ve bölümden kalan : " + sonuc;
    }
    else{
        let sonuc=girilenSayi/5;
        let sonuc2=girilenSayi/3;
        document.getElementById("sonuc2").innerHTML="Sayinizin 5 e bölümünden kalan : " + sonuc.toFixed(2) + " " + "Sayinizin 3 e bölümünden kalan : " +sonuc2.toFixed(2);
    }
   
}
let butonHesapla=document.getElementById("btn");
butonHesapla.onclick=durum;

let kalanHesapla=document.getElementById("btn2");
kalanHesapla.onclick=kalanYaz;