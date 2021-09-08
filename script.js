var dateInputRef = document.querySelector("#bday-input");

var showBtnRef = document.querySelector("#show-btn");

var resultRef = document.querySelector("#result");

function clickHandler(e){

var bdayStr = dateInputRef.value;

if(bdayStr !== ''){
  var listOfDate = bdayStr.split('-');

  var date ={
    day: Number(listOfDate[2]),
    month: Number(listOfDate[1]),
    year:  Number(listOfDate[0]),
  };
  var isPalindrome = checkPalindromeForAllFormates(date);

  if(isPalindrome){
  resultRef.innerText = "Yay!! your birthday is palindrome!!"
  }
else {
  var [count, nextDate] = getNextPalindromeDate(date);
  resultRef.innerText = ` Your birthday is not palindrome, The next palindrome date is on ${nextDate.day}-${nextDate.month}-${nextDate.year}, You were missed by ${count} days.🤦‍♂️`;

}

}

}

showBtnRef.addEventListener('click', clickHandler);




function reverseStr(str){
  var listOfChars = str.split('');
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join('');
  return reversedStr;
}

function isPalindrome(str){
  var reverse = reverseStr(str);
  return str === reverse;
}

function convertDateToStr(date){

var dateStr = {day: '', month: '', year: ''};

if(date.day < 10){
  dateStr.day = '0' + date.day;
}
else{
  dateStr.day = date.day.toString();
}
if(date.month < 10){
  dateStr.month = '0' + date.month;
}
else{
  dateStr.month = date.month.toString();
}
dateStr.year = date.year.toString();
return dateStr;
}


function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

 function checkPalindromeForAllFormates(date){
   var listOfPalindromes = getAllDateFormats(date);

   var flag = false;

   for(var i=0; i < listOfPalindromes.length; i++){
     if(isPalindrome(listOfPalindromes[i])){
       flag = true;
       break;
     }
   }

   return flag;
 } 
  // check for leap year
  function isLeapYear(year){
    if(year % 400 === 0){
      return true;
    }
    if(year % 100 === 0){
     return false;
    }
     if(year % 4 === 0){
     return true;
     }
     return false;
  }

  

// gets next date

function getNextDate(date){
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

 if(month === 2){   // check for feb
  if(isLeapYear(year)){
 if(day > 29){
   day = 1;
   month++;
 }
  }else{
if(day > 28){
  day = 1;
   month++;
}
  }
 }
  else{
    // check if the day exceds the max days in month
    if(day > daysInMonth[month - 1]){
      day = 1;  
      month++;
    }
  }
  if(month > 12){
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year
  };
}



  function getNextPalindromeDate(date){
var count = 0;
var nextDate = getNextDate(date);

while(1){
  count++;
  var isPalindrome = checkPalindromeForAllFormates(nextDate);
  if(isPalindrome){
    break;
  }
  nextDate = getNextDate(nextDate);
}
return [count, nextDate];
  }

// check previous date

function getPreviousDate(date)
{
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 3)
    {
        if(IsLeapYear(year))
        {
            if(day < 1)
            {
                day = 29;
                month--;
            }
        }
        else
        {
            if(day < 1)
            {
                day = 28;
                month--;
            }
        }

    }
    else
    {
        if(day < 1)
        {
            month--;
            if(month < 1)
            {
                month = 12;
                year--;
            }
            day = daysInMonth[month - 1];
        }
    }

    return {
        day:day,
        month:month,
        year: year,
    }

}

// cjeck previous palindrome date

function getPreviousPalindromeDate(date)
{
    var counter = 0;
    var previousDate = getPreviousDate(date);

    while(1)
    {
        counter++;
        var isPreviousPalindrom = checkPalindromeForAllFormates(previousDate);
        if(isPreviousPalindrom)
        {
            break;
        }
        previousDate = getPreviousDate(previousDate);
    }

    return [counter,previousDate];

}


  










 







