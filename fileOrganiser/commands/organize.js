const fs=require ("fs");
const path =require("path");
let types = {
    media:["mp4","mkv","mp3"],
    archives:['zip','7z','rar','tar','gz','ar',"xz"],
    documents:['docs','doc','pdf','xlsr','xls','odt','ots','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg',"deb"],
    images:['png','jpg','jpeg']
}
function organize (srcPath){
    if(srcPath == undefined){
        //console.log(srcPath);
    }
    srcPath =process.cwd();
    console.log(srcPath);
    //else console.log(srcPath);
    let organizedFiles =path.join(srcPath,"organized_files");
    if(fs.exitsSync(organizedFiles) == false){
    //console.log("organized files folder path is",organizedFiles);
    fs.mkdirSync(organizedFiles);
    }
    else console.log('folder already exist');

}
organize();






//4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
// for (let i = 0; i < allFiles.length; i++){
//     // let ext = allFiles[i].split(".")[1];
//     //extname returns the extension of the file 
//     let ext = path.extname(allFiles[i]);
//     console.log(ext);
// }