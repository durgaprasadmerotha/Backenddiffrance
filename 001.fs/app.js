// const { log } = require('console');
// const fs = require('fs');

//curd//

// fs.writeFile("hello.txt","hello node.js", (err) => 
// {

//     if (err) {
//         console.log(err)
        
//     }
//    else  {
//     console.log("file created success");
    
//    }

// }

// fs.readFile("hello.txt","utf-8",(err,data) => {
//     if (err) {
//         console.log(err);
        
//     }
//     else {
//         console.log(data);
        
//     }

// })



//  //file ko deleted karne k liye
// fs.unlink("hello.txt",(err) => {
//     if (err) {
//         console.log(err);
        
        
//     }

//     else {
//         console.log("file deleted");
        
//     }
// })



//  File ko read kiase kare//


// fs.readdir('simplefolder',(err,files) => {
//     if (err) {
//         console.log(err)
        
        
//     }
//     else {
//         console.log(files)
        
//     }
// // })

// // ***************  delete karne k liye files *************** 

// fs.rmdir('simplefolder',{
//     recursive:true},

    
// (err) => {
//         if (err) {
//             console.log(err);
            
            
//         }

//         else {
//             console.log("folder deleted");
            
//         }
// })