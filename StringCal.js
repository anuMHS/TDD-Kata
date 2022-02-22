function StringCalculator(){
}
StringCalculator.prototype.add = function(string_numbers) {
  this.number = string_numbers;
  if (this.number.includes('-')) {
    throw new Error('negatives not allowed');
  }
  // replaces \n with ,
  numbers = this.number.replace(/(\r\n|\n|\r)/gm,",");
  if (numbers == '') {
    return 0;
  } else if(numbers.length === 1) { 
    return (parseInt(numbers));
  } else {
    res = numbers.split(',');
    var total = 0;
    var arrayLength = res.length;
      for (var i = 0; i < res.length; i++) {
        total = total + parseInt(res[i]);
      }
      return total;   
  }
};