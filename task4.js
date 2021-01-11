const formatString = function(string) {
    let formatedString;
    if (string.length <= 40) {
        formatedString = string;
    } else {
        formatedString = string.split('').splice(0, 40).join('')+'...';
    }
    return formatedString;
}
  
  
  console.log(formatString('Curabitur ligula sapien, tincijkllkn.'));
  // вернется оригинальная строка
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка