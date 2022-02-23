// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return num<42? 42-num: num-42;
}


function distanceFromHqInFeet(num){
    return num<42 ? (42-num)*264 : (num-42)*264;
}

function distanceTravelledInFeet(num1,num2){
    return num1>num2? (num1-num2)*264 : (num2-num1)*264;
}


function calculatesFarePrice(start, destination){
    let distance=Math.abs(start-destination)*264;
    if(distance>2500){
        return 'cannot travel that far';
    }else if(distance >2000){
        return 25;
    }else if(distance >400){
        return 0.02*(distance-400)
    }else
         return 0;

}

