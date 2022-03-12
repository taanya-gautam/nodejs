//let input =process.argv;
//console.log(input);
//let input =process.argv.slice(2);
//console.log(input);
const { log } = require("console");
const fs =require("fs");
let inputArr =process.argv.slice(2);
console.log(inputArr);
let filesArr =[];
let optionsArr =[];
for (let i=0;i<inputArr.length;i++){
    let firstChar =inputArr[i];
    filesArr.push(inputArr[i]);
    console.log(firstChar);
    if (firstChar == '-'){
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
    
}
console.log("file to be read are" + filesArr);
//check if all the files are present

for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i])
        if (!doesExist) {
            console.log("files does not exist");
            return;
        }
    

}
//content read and appending starts

let content ="";
for(let i=0;i<filesArr.length;i++){
    let fileContent =fs.readFileSync(filesArr[i]);
    content +=fileContent+"\n";
}
console.log(content);

//fonction for content numbering
let contentArr =content.split("\n");
console.log(contentArr);


//check if -s is present or not
let isPresent =optionsArr.includes("-s");
if (isSPresent){
    for (let i=q;i<contentArr.length;i++){
        if(contentArr[i] == ""&& contentArr[i-1] == ""){
            contentArr[i] =null;
        }
    }
}
else{
    console.table(contentArr);

}

let indexofN =optionsArr.indexof("-n");
let indexofB =optionsArr.indexof("-b");
//if -n or -b is not found,-1 is returned
let finalOption ="";
//if both -n are -b are present
if (indexofN != -1 && indexofB != -1){
    if (indexofN < indexofB ){
        finalOption ="-n";
    }
    else {
        finalOption ="-b";
    }
}

//either -n is present OR -B IS PRESENT
else{
    if(indexofN != -1){
        finalOption ="-n";
        elseif(indexofB != -1) 
            finalOption ="-b";
        
    }
    //calling of function by evaluating final option
    if (finalOption == "-n"){
        modifyContentByN();

    }
    elseif(finalOption =="-b")
        modifyContentByB();

    
    function modifyContentByN(){

    }
    function modifyContentByB(){

    }
    //calling of function by evaluating finaloption

    if (finalOption == "-n"){
        modifyContentByN();
        elseif (finalOption =="-b")
            modifyContentByB();
    }
    }
        function modifyContentByN(){}{
            for(let i=0;i<contentArr.length;i++){
                contentArr[i] =(i+1) +")" +contentArr[i];
            }
        }

    console.log(contentArr);

    function modifyContentByB(){}{
        let count =1;
        for(let i=0;i<contentArr.length;i++){
            if (contentArr[i]!=" "){
                contentArr[i] =count + ")" +contentArr[i];
                count++;
            }
        }



}

