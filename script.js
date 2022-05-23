

function checkForm(){
    alert("Form temizlenecek");
    document.forms[0].reset();
   }

$(function(){
    var $title = $('.js-title');
    var copy   = '.js-copy';

    $title.click(function () {
    $(this).next(copy).slideToggle();
    $(this).parent().siblings().children().next().slideUp();
    return false;
    });
})

var NS4 = (document.layers); 
var IE4 = (document.all);
 
var win = window; 
var n = 0;
 
function findInPage(str) {
 
var txt, i, found;
 
if (str == "")
return false;
 
if (NS4) {
 
if (!win.find(str))
while(win.find(str, false, true))
n++;
else
n++;
 
if (n == 0)
alert("Bulunamadi.");
}
 
if (IE4) {
txt = win.document.body.createTextRange();
 
for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
txt.moveStart("character", 1);
txt.moveEnd("textedit");
}
 
if (found) {
txt.moveStart("character", -1);
txt.findText(str);
txt.select();
txt.scrollIntoView();
n++;
}
 
else {
if (n > 0) {
n = 0;
findInPage(str);
}
 
else
alert("Bulunamadi.");
}
}
 
return false;
}

function kontrol() {
    var username, pass, text ; 
    username= document.getElementById("kullaniciad").value.length;
    pass= document.getElementById("kullanicisifre").value.length;
    if (username == 0 || pass == 0) { 
    text= "Kullanici adı veya sifre bos birakilamaz";
    }

    else if (pass < 6) {
    text= "Sifre 6 karakterden kisa olamaz";
    }
 
    else if (username < 3 || username > 20) { 
    text= "Kullanici adi 3-20 karakter arasında olmalıdır"; 
    }
    else { 
    text= "Kayıt Basarili" ;
    }
    document.getElementById("result").innerHTML = text;
   }
   
