var isim = prompt("Lütfen adınızı giriniz.");
   
   if( (isim != "") && (isim != null) ) 
   
   document.getElementById("userWelcome").innerHTML = `Hello ${isim}. You Are Welcome !`
      
   else if(isim == "") 
   
   alert("Boş giriş yaptınız!");
   
   else if(isim == null) 
  
   alert("Giriş yapmaktan vazgeçtiniz!");

function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("zaman").innerHTML = `You have logged in on ${date}.<br> We are happy to have you among us.`;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 