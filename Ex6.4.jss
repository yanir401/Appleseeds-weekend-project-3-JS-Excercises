// text.some(function(v,i,a){
//   return a.lastIndexOf(v)!=i;
// });

function isIsogram(str) {
  const splitStr = "test".split("");
  const res = splitStr.some((v, i, a) => {
    return a.lastIndexOf(v) != i;
  });
  return res;
}
console.log(isIsogram("abac"));
