let string;
const formatString = function(string) {
    
    if((string.split('')).length < 40) {
        return(string);
    } else {
        let newString = string.split('').splice(0,40).join('');
        newString+=('...'); 
        return(newString);
    }
  };
  
  
  console.log(formatString('Curabitur ligula sapien, tincijkllkn.'));
  // вернется оригинальная строка
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка