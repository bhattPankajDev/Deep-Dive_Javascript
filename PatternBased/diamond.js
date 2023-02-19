function diamond(rowC){
    let countr=1;
    let totSpace=rowC-1;
    let totStCountr=1;
    for(let count=1;count<=2*rowC-1;count+=1){
       let spPatt="";
       ///Print space first
       for(let space=1;space<=totSpace;space+=1){
          spPatt+=' ';  
       }
       
       ///Print pattern then 
       let stPatt="";
       for(let stCount=1;stCount<=totStCountr;stCount+=1){
           stPatt+='*';
       }
       console.log(spPatt+stPatt);
       if(count<rowC){
         totSpace-=1;
         totStCountr+=2;
       }
       else{
         totSpace+=1;
         totStCountr-=2;
       }
    
    }
   }
   
   diamond(5);
   console.log("+++++++++++++++++");
   diamond(8);
   console.log("+++++++++++++++++");
   diamond(10);