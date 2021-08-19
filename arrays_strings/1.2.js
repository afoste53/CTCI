// is str1 a permutation of str2 (or vice versa)

// Using sorting
function isPerm(str1, str2){
    if(str1.length !== str2.length) return false;
    else if([...str1].sort((a,b) => a.localeCompare(b)).join("") !== [...str2].sort((a,b) => a.localeCompare(b)).join("")) return false;

    return true;
}

console.log(isPerm('avscd', 'abcd'));
console.log(isPerm('avscd', ''));
console.log(isPerm('abcd', 'abcd'));
console.log(isPerm('abcd', 'dcba'));