//index Longest Palindromic Substring starting
const first_message = 'babad';
const second_message = 'cbbd';
console.log(`Longest Palindrome in ${first_message} is ${getLongestPalindrome(first_message)}`);
console.log(`Longest Palindrome in ${second_message} is ${getLongestPalindrome(second_message)}`);
//index Longest Palindromic Substring ending

//Script to check if a string is a palindrome start
function isPalindrome(input_str) {
  var rev = input_str.split('').reverse().join(''); // check equal input_str with reverse word 
  return input_str == rev;
}
function getLongestPalindrome(input_str) {
  var max_length = 0,
  max_word = '';
  for (var i = 0; i < input_str.length; i++) {
    var main_str = input_str.substr(i, input_str.length);  // start check full word and then substring following index from 0 to end of word
    for (var j = main_str.length; j >= 0; j--) { // start check full word and then substring following index from end of word to 0
      var sub_str = main_str.substr(0, j);
      if (sub_str.length <= 1) continue;
      if (isPalindrome(sub_str)) { // check if sub_str is palindrome
        if (sub_str.length > max_length) { // check if new sub_str(palindrome) length is greater than old palindrome max_length
          max_length = sub_str.length;
          max_word = sub_str;
        }
      }
    }
  }
  return max_word;
}
//Script to check if a string is a palindrome end