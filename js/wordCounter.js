let text=document.getElementById('textbox');
text.addEventListener('input',function(){
    var textValue=this.value;  // textValue=text.value;
    document.getElementById('charCounter').innerHTML=textValue.length;
    
    textValue=textValue.trim();
    let words=textValue.split(" ");
    let cleanList=words.filter(function(elem){
         return elem !="";
    })
    console.log(cleanList);
    document.getElementById('wordCounter').innerHTML=cleanList.length;
    
});
