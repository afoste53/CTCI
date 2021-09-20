// // slow double for
// function isUnique(str) {
//     for(let i = 0; i < str.length; i++){
//         for(let j = i+1; j < str.length; j++){
//             if(str[i] === str[j]) return false;
//         }
//     }
//     return true;
// }

// // w/ map
// function isUnique(str){
//     let map = new Map();
//
//     for(let c in str){
//         if(map.has(str[c])){
//             return false;
//         }else{
//             map.set(str[c], true)
//         }
//     }
//
//     return true;
// }

// // w/ js obj
function isUnique(str){
    let map = {};

    for(let c in str){
        if(map[str[c]]){
            return false;
        }else{
            map[str[c]] =  true;
        }
    }

    return true;
}
