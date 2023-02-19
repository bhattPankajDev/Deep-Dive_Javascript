let isPrimeUser = false;
let isAcornUser = false;
let isDiscoveryUser = false;

if(isPrimeUser){
    if(isAcornUser){
        if(isDiscoveryUser){
            console.log('Hi User, you can watch all the content :)');
        }
        else{
            console.log('Hi User, you can consume Prime as well as Acorn stuff for Discovery just enroll for the service');
        }
    }
    else{
        if(isDiscoveryUser){
            console.log('Hi User, you can watch the Discovery and Prime content');
        }
        else{
            console.log('Hi User, you can consume Prime content only for other services please enroll');
        }
    }
}
else{
    console.log('Please enroll for Prime User to enjoy the content:)');
}