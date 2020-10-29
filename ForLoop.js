var bananaName = ['mim','banana','pinaple','Goaba'];
var search;
for (let i = 0; i < bananaName.length; i++) {
     var element = bananaName[i];
     if(element=='Goaba'){
         console.log('mim is present');
         break;
     }
     else{
         search = -1 ;
     }   
    }
    console.log(search);
    
