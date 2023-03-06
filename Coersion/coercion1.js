  //Cohercion -> In any programming during code operations there is a need of type -conversion so this concept is stated as Cohercion.
  // Type coversion is of 2 types-> Explicitly and Implicitly
  // Explicitly -> When dev's manually does that and  ( Implicitly) ->when it is happened automatically by JS base on some Algo/rules and the simp convsn more specifically termed as cohercion actually.
  //In those algos there comes concept of ABSTRCAT OPERATIONS 
  //Abstrcat operations are those things which are n't defined in echmascript but it is there to make application of algos (type conversion and other easier) ad these Anstarct operations are used by JS internally , the devs can't use it manually.
  // Example console.log(1-'10') => so here inherently this 'SUBSTRACTION' uses abstract operatn ToNumber() on both the operands leftArg and rightArg 
  // so above example will be something like => console.log(1-10) =>9 ANS
  // there is a algo for all conversion
//ToNumber('11'); //error abstrcat operator can't be used directly

  console.log(2 - NaN);
  console.log(2 - null);  
  console.log(2 - 20);  
  console.log(2 - false);
  console.log(2 - 'SuccessSDE');
  console.log(2 - 'CheckThis 123');
  console.log(20 - Infinity);  
  console.log(false-100);
  console.log('SuccessSDE'+2);
  console.log(2-undefined);
  console.log(20-'18');
  console.log('100'-'10');
  //NaN , 2 , -18, 2 , NaN , NaN , -Infinity , -100 , SuccessSDE2 ,NaN , 2 , 90 