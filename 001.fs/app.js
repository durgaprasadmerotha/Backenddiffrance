const fs = require('fs');

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



 //file ko deleted karne k liye
fs.unlink("hello.txt",(err) => {
    if (err) {
        console.log(err);
        
        
    }

    else {
        console.log("file deleted");
        
    }
})
