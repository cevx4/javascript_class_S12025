

var targetParagram = document.getElementById("ourTargetPara");

var todayDate = new Date; 

var todayIs = todayDate.getDay();

targetParagram.innerHTML = todayIs;

switch(todayIs) {

    case 0:
        targetParagram.innerHTML = "today must be sunday";
    case 1:
        targetParagram.innerHTML = "today must be monday";         
    case 2:
        targetParagram.innerHTML = "today must be tuesday";
    case 4:
        targetParagram.innerHTML = "today is TAFE SA day because it is thursday!"    

}




