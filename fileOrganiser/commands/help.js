const { mainModule } = require("process");

function help(){
    console.log(
        `These are some myCLI commands used in various situations:"

       1. node main.js tree <filepath>
       2. node main.js organize <path>
       3. node main.js help `
    )
}



module.exports = {
    help:help
    //haathi :help
    //ghoda :abc
}