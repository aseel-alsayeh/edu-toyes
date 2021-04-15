alert ('Wlecome');
console.log('this is from js file');
var parents = prompt( 'Are you parents? (yes or no)');
if (parents == 'yes')
{var msg1 =('dear pearents, we recomend to see the educational videos');
var msg2 = '<img src="https://png.pngtree.com/png-vector/20190830/ourlarge/pngtree-video-icon-record-symbol-isolated-png-image_1716735.jpg" alt="gif" width="50px">'

document.write (msg1);
document.write (msg2);
    var mom ="mom"
    var dad = "dad"
    var par = prompt('Are you mom or dad');
   while (par !== mom && par !== dad)
   {
     par = prompt('Are you mom or dad');
   }


} else if (parents=='no')
{ /*var link 
document.write("<a href="https://web.whatsapp.com">") ;
document.write("Your Title");
document.write("</a>"); */
//string.link(https://web.whatsapp.com/);
var msg3 = '<a href="https://translate.google.com/?sl=en&tl=ar&text=parents&op=translate">translate</a>'
document.write (msg3);
}

 var txt;
  if (confirm('are you looking for a gift? ')) {
    txt = "cheak out our Market page";
    document.write (txt)
    
    var NumGifts = prompt( "How many of choices of gifts do you want to see?")
    var NumImg
    var msg4  = '<img src="https://thumbs.nosto.com/quick/bigcommerce-ufhcuzfxw9/8/11609/54f9ea7553cb344299a6c5ace44bb154782f1a04e2092baeaf7bd6de7fd6e5faa/A" alt="gift" width="150px">'

 for(NumImg=1;NumImg<=NumGifts;NumImg++)
 {
    document. write (msg4);
 }



 } 
 
 else {
    txt = "You pressed Cancel!";
  }

console.log(txt)
 

