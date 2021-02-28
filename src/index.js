module.exports = function check(str, bracketsConfig) {
   if (str.length%2!=0) return false;
  let arr=bracketsConfig.map(i=>i.join(''));
  let i = 0;
  let j = 1;
  while(j == 1){
    j = 0;
    for( let i=0; i < bracketsConfig.length;i++){
      let arr = str.split(bracketsConfig[i][0]+bracketsConfig[i][1]);
      if(arr.length > 1){
        i++
        j = 1;
        str = arr.join('');
      }
    }
  }
  let result = false;
  if(str == ''){
    result = true;
  }
  return result;
}
