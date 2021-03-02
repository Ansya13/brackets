module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
   for (let i = 1; i < arr.length; i++) {
       for (let char= 0; char < bracketsConfig.length; char++) {
           if (arr[i] == bracketsConfig[char][1] && arr[i - 1] == bracketsConfig[char][0]) {
               arr.splice(i - 1, 2);
         i-=2;
       }
     }
   }
   if (arr.length > 0) return false;
     else return true;
}




