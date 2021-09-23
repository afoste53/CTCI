/**
 * Assume you have a method isSubstring (String.includes) which checks if one word is a substring
 *  of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
 * only one call to isSubstring (eg. 'waterbottle' is a rotation of 'erbottlewat').
 *
 * @param s1
 * @param s2
 * @return boolean
 */

function isRotation(s1, s2){
    // if both are empty, then true
    if(!s1 && !s2){
        return true;
    }

    // if they aren't the same length, s2 can't be a rotation of s1
    if(s1.length !== s2.length){
        return false;
    }

    let i = 0;

    // Walk through s2 looking for the first letter of s1
    for(i; i < s1.length; i++){
        // if there's a match in the first character, make sure the rest of the
        // letters match moving forward
        if(s1[0] === s2[i]){
            let j = i + 1;
            while(j < s1.length){
                if(s1[j-i] !== s2[j]){
                    break;
                }
                j++;
            }

            if(s1.includes(s2.substring(0,1))){
                return true;
            }
        }
    }
    return false;
}

function alternateIsRotated(s1, s2){
    if(s1.length === s2.length && s1.length > 0){
        let doubleS1 = s1+s1;
        return doubleS1.includes(s2);
    }
    return false;
}

console.log(alternateIsRotated('waterbottle','erbottlewat'));