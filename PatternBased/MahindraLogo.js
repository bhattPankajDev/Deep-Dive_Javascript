function mahindraLogo(rowC){
    let totSpace=rowC-2;
    let totStCountr=1;
    for(let count=1;count<=rowC;count+=1){
        //FirstStarPart
        let firstSt="";
        for(let firstItr=1;firstItr<=totStCountr;firstItr++){
            firstSt+="*";
        }

       let spPatt="";
       ///Middle space first
       for(let space=1;space<=totSpace;space+=1){
          spPatt+='  ';  
       }
       
       ///Print End pattern
      //  console.log('End starte');
       let endPatt="";
       let totEndSt = totStCountr;
       let cond = Math.floor(rowC/2)+1;
       if(count==cond){  
            totEndSt=totStCountr-1;
       }
   
       for(let stCount=1;stCount<=totEndSt;stCount+=1){
            endPatt+=' *';
       }
       
       console.log(firstSt+spPatt+endPatt);
       if(count<=(rowC/2)){
         totSpace-=2;
         totStCountr+=1;
       }
       else{
         totSpace+=2;
         totStCountr-=1;
       }
    }
   }
   
   mahindraLogo(7);
   console.log("+++++++++++++++++");
//    mahindraLogo(7);
//    console.log("+++++++++++++++++");
//    mahindraLogo(11);