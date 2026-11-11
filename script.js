const studentName ="Ellaha"; 
console.log("Student Name:",studentName);

const studentAge = 19;
console.log("Student Age:",studentAge);

const mathematicsMarks = 85;
console.log("Mathematics Marks:",mathematicsMarks);

const englishMarks = 90;
console.log("English Marks:",englishMarks);

const computerMarks = 95;
console.log("Computer Marks:",computerMarks);

const totalMarks = mathematicsMarks + englishMarks + computerMarks;
console.log("Total Marks:", totalMarks);

const averageMarks = totalMarks / 3;
console.log("Average Marks:", averageMarks);

const highestPossibleTotal = 100*3
console.log("Highest Possible Total:", highestPossibleTotal);

const remainingMarks = highestPossibleTotal - totalMarks;
console.log("Remaining Marks:", remainingMarks);

const isolderThan18 = studentAge >18;
console.log("Older than 18:", isolderThan18);

const isMathGreaderThan80 = mathematicsMarks > 80;
console.log("Math Greater than 80:", isMathGreaderThan80);

const isEnglishEqual100 = englishMarks === 100;
console.log("English Equal to 100:", isEnglishEqual100);

const isComputerDifferent50 = computerMarks !== 50;
console.log("Computer Different from 50:", isComputerDifferent50);

const isAverageGreaterThanOrEqual150 = averageMarks >= 50;
console.log("Average Greater than or Equal to 50:", isAverageGreaterThanOrEqual150);


let grade;
if(averageMarks >= 90){
    grade = "A";
}

else if(averageMarks >= 80){
    grade = "B";
}

else if(averageMarks >= 70){
    grade = "C";
}

else if (averageMarks >= 60){
    garde = "D";
}

else if(averageMarks){
    grade = "E";
}

else{
    grade = "F";
}

console.log("Student Grade:", grade);