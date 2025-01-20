function sum(string) {
    var count = 0;
    const array = string.split(",");
    for(var i = 0;i < array.length; i++) {
        if(+array[i] < 0){
            return "negative numbers not allowed"
        }
        count = +array[i] + count
    }
    return count;
  }
  
  
  export default sum;