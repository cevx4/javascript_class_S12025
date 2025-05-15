
var targetParagraph = document.getElementById("ourTargetPara");

var students = [];
var result = "";
var arrayIndex = 0;

students[0] = "Ben";
students[1] = "Issac";
students[2] = "Simon";
students[3] = "Mckenzie";
students[4] = "Raquel";
students[5] = "Roberto";

/*
do {
    result += "Checking student: " + students[arrayIndex] + "<br />";
    arrayIndex++;
}while(students[arrayIndex] != "Mckenzie");

targetParagraph.innerHTML = "Mckenzie was found at index: " + arrayIndex;
*/
// is students[0] != "Mckenzie" ------> True
// is students[1] != "Mckenzie" ------> True
/*
while(students[arrayIndex] != "Mckenzie"){
    result += students[arrayIndex] + "<br />";
    arrayIndex++;
}

targetParagraph.innerHTML = "Mckenzie was found at index: " + arrayIndex;
*/

// step 1: i = 0, therefore 0 is the starting number.
// step 2: is (6 <= 5) ? ---> false
// step 3: add the current value of i into the variable 'result'
// step 4: incremente i by 1 ---- this makes i = 2
// step 5: i is now equal to 2
// step 6: go to step 2 and continue till step 4 ----> KEEP ON LOOPING until i = 6
/*
console.log("The length of our array is: " + students.length);
for(i = 0; i < students.length; i++) {
    if(students[i] == "Mckenzie"){
        console.log("yes it is at index " + i);        
    }
    else {
        console.log("it is NOT at index " + i); 
    }
    //result += "current number is: " + i + "<br>";
}

console.log("The last value in array is: " + students[(students.length-1)]);
*/
//targetParagraph.innerHTML = result;




