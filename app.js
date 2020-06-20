// Chapter 21 to 25
// Task# 1

// var firstname = prompt('Enter your First name','First Name');
// var lastname = prompt('Enter your last name','Last Name');
// var fullName = 'Welcome '+firstname+' '+lastname;
// alert(fullName);

// Task# 2

// var phone = prompt('Tell me About your favourite Mobile Model');
// var phoneLength = phone.length;
// document.write('My favourite phone is: '+phone+'<br> Length of String: '+phoneLength);

// Task# 3

// var nationality = "Pakistani";
// var indexofn = nationality.indexOf('n');
// document.write('<br>String: '+nationality+'<br>');
// document.write('<br>Index of "n" is: '+indexofn+'<br>');

// Task# 4

// var greetings = "Hello World";
// var lastindex = greetings.lastIndexOf('l');
// document.write('<br>String: '+greetings+'<br>');
// document.write('<br>Last Index of l is: '+lastindex+'<br>');

// Task# 5

// var countryName = "Pakistani";
// var indexofn = countryName.charAt(3);
// document.write('<br>String: '+countryName+'<br>');
// document.write('<br>Character at Index 3 is: '+indexofn+'<br>');

// Task# 6

// var firstname = prompt('Enter your First name','First Name');
// var lastname = prompt('Enter your last name','Last Name');
// var fullName = firstname.concat(lastname);
// alert(fullName);

// Task# 7

// var city = "Hyderabad";
// var repcity = city.replace("Hyder","Islam");
// document.write('<br>City: '+city+'<br>');
// document.write('<br>After Replacement: '+repcity+'<br>');

// Task# 8

// var message = "Ali and sami are best friends. They play circket and football together";
// var change = message.replace(/and/g,"$");
// document.write(change);

// Task# 9

// var stringval = "472";
// var convert = Number(stringval);
// document.write('<br> Value: '+stringval+'<br>');
// document.write('Type: String <br>');
// document.write('<br> Value: '+convert+'<br>');
// document.write('Type: Number <br>');


// Task# 10

// var userinput = prompt("Enter any word in lowercase");
// var userupper = userinput.toUpperCase();
// document.write('<br> User Input: '+userinput+'<br>');
// document.write('Upper Case:'+userupper+'<br>');

// Task# 11

// var userinput = prompt("Enter any word in lowercase");
// var firstletter = userinput.slice(0,1);
// var userupper = firstletter.toLocaleUpperCase();
// var changeLetter = userinput.replace(firstletter,userupper);
// var joinboth = userupper.concat(userupper);
// document.write('<br> User Input: '+userinput+'<br>');
// document.write('First Letter Upper Case: '+changeLetter+'<br>');

// Task# 12

// var numberval = 35.36;
// var convertt = numberval.toString();
// var removedot =  convertt.split('.').join("");
// document.write('<br> Number: '+numberval+'<br>');
// document.write('<br> Result: '+removedot+'<br>');

// Task# 13

// var username = prompt('Please enter your name');
// for(var i=0; i<username.length; i++)
// {
//     if(username.charAt(i) == "@" || username.charAt(i) == "." || username.charAt(i) == "," || username.charAt(i) == "!")
//     {
//         username = prompt('Please Enter a valid user name');
//     }
// }

// Task# 14

// var a = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to ABC Bakery what do you want to order Sir/Ma'am");
// if(search == "cake")
// {
//     document.write(search+' is availabe at index 0 in our bakery');
// }else if(search == "apple pic")
// {
//     document.write(search+' is availabe at index 1 in our bakery');
// }else if(search == "cookie")
// {
//     document.write(search+' is availabe at index 2 in our bakery');
// }
// else if(search == "chips")
// {
//     document.write(search+' is availabe at index 3 in our bakery');
// }else if(search == "patties")
// {
//     document.write(search+' is availabe at index 4 in our bakery');
// }else
// {
//     document.write('We are sorry'+search+'is not availabe at our bakery');

// }

// Task# 15

// var userpassword = prompt("Enter your Password");
// for(var i=0; i<userpassword.length; i++)
// {
//     if(userpassword.charAt(i) == "@" || userpassword.charAt(i) == "." || userpassword.charAt(i) == "," || userpassword.charAt(i) == "!" || userpassword.charAt(i) == "&")
//     {
//         userpassword = prompt('Please Enter a valid Password');
//     }
// }

// firstChar = userpassword.slice(0,1);
// if(firstChar=="0" || firstChar=="1" || firstChar=="2" || firstChar=="3" || firstChar=="4" || firstChar=="5" || firstChar=="6" || firstChar=="7" || firstChar=="8" || firstChar=="9")
// {
//     userpassword = prompt('Please cannot beging with a Number please Enter a valid Password');
// }

// if(userpassword.length < 6)
// {
//     userpassword = prompt('Please Enter a valid Password with atleast 6 characters');
    
// }

// Task# 16

// var uni = "University Of Karachi";
// var changeInArray = uni.split("");
// for(var a=0; a<changeInArray.length; a++)
// {
//     document.write(changeInArray[a]+'<br>');
// }

// Task# 17

// var lastIndex = prompt("Enter any word");
// var check = lastIndex.slice(-1);
// document.write('User Input: '+lastIndex);
// document.write('<br>Last Character of input is: '+check);

// Task# 18

// var content = "The quick brown fox jumps over the lazy dog";
// var count   = (content.match(/the/g)).length;
// document.write('Text: '+content+'<br>');
// document.write('There are '+count+' occurence(s) of word the'); 

// Chapter# 26-30
// Task# 1

// var positiveInt = prompt("Enter any positive Integer");
// var roundOff = Math.round(positiveInt);
// var flooroff = Math.floor(positiveInt);
// var ceiloff  = Math.ceil(positiveInt);
// document.write('<br>Number: '+positiveInt+'<br>');
// document.write("round off value: "+roundOff+'<br>');
// document.write("floor value: "+flooroff+"<br>");
// document.write("ceil value: "+ceiloff);

// Task# 2

// var negativeInt = prompt("Enter any Negative Floating value");
// var roundOff = Math.round(negativeInt);
// var flooroff = Math.floor(negativeInt);
// var ceiloff  = Math.ceil(negativeInt);
// document.write('<br>number: '+negativeInt+'<br>');
// document.write("round off value: "+roundOff+'<br>');
// document.write("floor value: "+flooroff+"<br>");
// document.write("ceil value: "+ceiloff);

// Task# 3

// var absValue = prompt("Enter any Number");
// var result = Math.abs(absValue);
// document.write("The absolute value of "+absValue+' is '+result);

// Task# 4
// var dice = Math.random();
// var diceResult = (dice * 6) + 1;
// document.write("random dice value: "+diceResult);

// Task# 5

// var randomDice = (Math.floor(Math.random() + 1.5 ));
// if(randomDice == 1)
// {
//     document.write(randomDice+'<br>');
//     document.write('random coins value: Heads');
// }else
// {
//     document.write(randomDice+'<br>');
//     document.write('random coins value: Tails');
// }

// Task# 6

// var rand = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100: "+rand);

// Task# 7

// var weight = prompt("Please Enter your weight");
// var convert = parseFloat(weight);
// document.write("The weight of user is: "+convert+' kilograms');

// Task# 8

// var secrectNumber = Math.floor(Math.random() * 10);
// var randNumber = prompt("Please Enter any number between 1 to 10");
// if(secrectNumber == randNumber)
// {
//     alert('Congratulations!');
// }else{
//     alert('Try again');
// }

// Chapters 31-34


// Task 1
/*
var fullDate=new Date();
document.write(fullDate+"</br></br>");
*/

// Task 2

/*
var onlyMonth=fullDate.getMonth();
if(onlyMonth==0)
{
    document.write("January"+"</br></br>");
}
else if(onlyMonth==1)
{
    document.write("February"+"</br></br>");
}
else if(onlyMonth==2)
{
    document.write("March"+"</br></br>");
}
else if(onlyMonth==3)
{
    document.write("April"+"</br></br>");
}
else if(onlyMonth==4)
{
    document.write("May"+"</br></br>");
}
else if(onlyMonth==5)
{
    document.write("June"+"</br></br>");
}
else if(onlyMonth==6)
{
    document.write("July"+"</br></br>");
}
else if(onlyMonth==7)
{
    document.write("August"+"</br></br>");
}
else if(onlyMonth==8)
{
    document.write("September"+"</br></br>");
}
else if(onlyMonth==9)
{
    document.write("October"+"</br></br>");
}
else if(onlyMonth==10)
{
    document.write("November"+"</br></br>");
}
else if(onlyMonth==11)
{
    document.write("December"+"</br></br>");
}
*/



// Task 3

/*
var dayToday=fullDate.getDay();
if(dayToday==0)
{
    document.write("Sun"+"</br></br>");
}
else if(dayToday==1)
{
    document.write("Mon"+"</br></br>");
}
else if(dayToday==2)
{
    document.write("Tue"+"</br></br>");
}
else if(dayToday==3)
{
    document.write("Wed"+"</br></br>");
}
else if(dayToday==4)
{
    document.write("Thu"+"</br></br>");
}
else if(dayToday==5)
{
    document.write("Fri"+"</br></br>");
}
else if(dayToday==6)
{
    document.write("Sat"+"</br></br>");
}
*/

// Task 4

/*
dayToday
if(dayToday==0)
{
    document.write("It's Fun day"+"</br></br>");
}
else if(dayToday==6)
{
    document.write("It's Fun day"+"</br></br>");
}
*/


// Task 5

/*
var getDays=fullDate.getDay();
if(getDays<16)
{
    document.write("First Fifteen days of the month"+"</br></br>");
}
else{
    document.write("Last days of the month"+"</br></br>");
}
*/


// Task 6

/*
var storeData=new Date("Jan 1, 1970");
var gettodayDatemili=fullDate.getTime();
var convertMiliseconds=storeData.getTime();
var diff=gettodayDatemili-convertMiliseconds;
document.write("Current Date: "+fullDate+"</br>");
document.write("Elapsed milliseconds since January 1,1970:"+diff+"</br>");
document.write("Elapsed milliseconds since January 1,1970:"+(diff/1000*60*60*24)+"</br></br>");
*/

// Task 7

/*
var getPmOrAm=fullDate.getHours();
document.write(getPmOrAm+"</br>");
if(getPmOrAm>=1 && getPmOrAm<=12){
document.write("It's AM"+"</br></br>");
}
else if(getPmOrAm>=13 && getPmOrAm<=23)
{
    document.write("It's PM"+"</br></br>");
}
*/


// Task 8

/*
var setTheDate=new Date(fullDate.setMonth(11));
document.write(setTheDate+"</br></br>");
*/


// Task 9

/*
var todaysDateC=new Date();
var calculatingRamadandDays=new Date("Jun 18, 2015");
var getDaysMili=calculatingRamadandDays.getTime();
var todaysDateMili=todaysDateC.getTime();
var diffBetweenTwoDate=todaysDateMili-getDaysMili;
var daysCount=diffBetweenTwoDate/(1000*60*60*24);
document.write(Math.floor(daysCount)+" days have passed since 1st Ramadan, 2015"+"</br></br>");
*/



// Task 10

/*
storeData=new Date("Dec 5, 2015");
convertMiliseconds=storeData.getTime();
var diff=gettodayDatemili-convertMiliseconds;
document.write("On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT),"+diff/1000*60*60+"</br></br>");
*/


// Task 11

/*
var extractTodaysDate=new Date();
document.write("current date:"+extractTodaysDate+"</br>");
var extractHours=new Date(extractTodaysDate.setHours(14));
document.write("1 hour ago, "+extractHours+"</br></br>");
*/


// Task 12

/*
var extractCurrentDate=new Date();
document.write("current date:"+extractCurrentDate+"</br>");
var convertTo100Years=new Date(extractCurrentDate.setFullYear(1920));
document.write("100 years back, it was "+convertTo100Years+"</br></br>");   
*/


// Task 13

/*
var takeInputAge=+prompt("Enter your age");
var getInputAge=new Date(takeInputAge);
document.write("Your age is "+takeInputAge+"</br>");
var getCurrDate=new Date();
var getYearToday=getCurrDate.getUTCFullYear();
var calculateYearAge=getYearToday-getInputAge;
document.write("Your birth year is "+calculateYearAge+"</br></br>");
*/


// Task 14

/*
var customerNameN=prompt("Enter your name");
var enterNumberUnits=+prompt("Enter number of units","410");
var enterChargesPerUnits=+prompt("Enter charges per unit ","16");
var netAmountBillWithInDueDate=enterNumberUnits*enterChargesPerUnits;
var latePaymentCharges=350;
var grossAmountPayableAfterDueDate=netAmountBillWithInDueDate+latePaymentCharges;
var onlyMontH=fullDate.getMonth();
var Monthm="";
if(onlyMontH==0)
{
 Monthm="January";
}
else if(onlyMontH==1)
{
Monthm="February";
}
else if(onlyMontH==2)
{
Monthm="March";
}
else if(onlyMontH==3)
{
Monthm="April";
}
else if(onlyMontH==4)
{
Monthm="May";
}
else if(onlyMontH==5)
{
Monthm="June";
}
else if(onlyMontH==6)
{
Monthm="July";
}
else if(onlyMontH==7)
{
Monthm="August";
}
else if(onlyMontH==8)
{
Monthm="September";
}
else if(onlyMontH==9)
{
Monthm="October";
}
else if(onlyMontH==10)
{
Monthm="November";
}
else if(onlyMontH==11)
{
Monthm="December";
}
document.write("<h1>K-Electric Bill</h1>"+"</br>");
document.write("Customer Name: "+"<strong>"+customerNameN+"</strong>"+"</br>");
document.write("Month: "+"<strong>"+Monthm+"</strong>"+"</br>");
document.write("Number of units: "+"<strong>"+enterNumberUnits+"</strong>"+"</br>");
document.write("Charges per units: "+"<strong>"+enterChargesPerUnits+"</strong>"+"</br></br>");
document.write("Net Amount Payable (within Due Date): "+"<strong>"+netAmountBillWithInDueDate+"</strong>"+"</br>");
document.write("Late payment surcharge: "+"<strong>"+latePaymentCharges+"</strong>"+"</br>");
document.write("Gross Amount Payable (after Due Date): "+"<strong>"+grossAmountPayableAfterDueDate+"</strong>"+"</br>");
*/

//Chapter 35-38


//Task 1
/*
function timee(){
    var d=new Date();
    document.write(d);
}
timee();
*/


//Task2
/*
function greet(){
    var a=prompt("Enter Your Firstname");
    var b=prompt("Enter Your lastname");
    alert("Welcome "+a+" "+b);
}
greet();
*/


//Task 3
/*
function add(){
    var a=+prompt("Enter Num 1");
    var b=+prompt("Enter Num 2");
    alert("Sum: "+ (a+b));
}
add();
*/


//Task 4

/*
function calc(){
var num1=+prompt("Enter Num1");
var num2=+prompt("Enter Num2");
var result=0;
var opt=prompt("Enter Operator i.e + , - , * , /");
if(opt=="+")
{
    return (num1+num2);
}
elseif(opt=="-")
{
    return (num1-num2);
}
elseif(opt=="*")
{
    return (num1*num2);
}
elseif(opt=="/")
{
    return (num1/num2);
}
}
var value=calc();
document.write(value);
*/


//Task 5

/*
function square(){
    var a=+prompt("Enter Number to Square it");
    var b=a*a;
    document.write(b);
}
square();
*/

//Task 6

/*
function fact(num){
    var f=1;
for(var i=num ; i>0; i--){
    f=f*i
}
return f;
}
var num=+prompt("Enter Num to cal Factorial");
var result=fact(num);
document.write(result);
*/


//Task 7

/*
function counting(){
var start=+prompt("Enter Start Number");
var end=+prompt("Enter End Number");
for (var i=start; i<=end; i++){
    document.write(i+"<br>");
}
}
counting();
*/


//Task 8

/*
function calcSquare(a){
    return (a*a);
}
function calculateHypotenuse(){
    var b=+prompt("Enter Base value");
    var p=+prompt("Enter Perpendicular value");
    var bb=calcSquare(b);
    var pp=calcSquare(p);
    var hyp=bb+pp;
    document.write("Hupotenous: "+hyp);
}
calculateHypotenuse();
*/


//Task 9

/*
function traingle(w,h){
    var a=(w*h);
    return a;
}
var w=+prompt("Enter Width: ");
var h=+prompt("Enter Height: ");
var area=traingle(w,h);
document.write("Area of Traingle: "+area);
*/


//Task 10

/*
function pal(w){
    var pp="";
    var check=false;    
    for(var i=(w.length)-1; i>=0; i--){
        
        if(check==false){
            pp=w[i];
            check=true;
        }
        else{
        pp=pp+w[i];
        }
    }  
    return pp;
}
var a=prompt("Enter String");
var result=pal(a);
if(result==a){
    document.write("The word "+result+" is Palindrome");
}
else{
    document.write("The word "+result+" is not Palindrome");
}
*/

//Task 11

/*
function capital(str)
{
    var first=str[0].toUpperCase();
    var str1=str.slice(1);
    var str2=first+str1;
    var str3=str2.split(" ");
    for(var i=0; i<str3.length; i++){
        first=str3[i];
        str2=first[0].toUpperCase();
        str1=str2+str3[i].slice(1);
        str3[i]=str1;
    }
    return str3.join(" ");
        
}
var s=prompt("Enter String");
var result=capital(s);
document.write(result);
*/


//Task 12

/*
function longWord(str)
{
    var str1=str.split(" ");
    var arr=new Array();
    for(var i=0; i<str1.length; i++)
    {
        arr[i]=str1[i].length;
    }
    var large=arr[0];
    var counter=0;
    for(var i=1; i<arr.length; i++){
        
        if(arr[i]>large){
            large=arr[i];
            counter=i;
        }
    }
    return str1[counter];
    
}
var s=prompt("Enter String");
var result=longWord(s);
document.write(result);
*/


//Task 13

/*
function countt(str,ch) {
    
    var counter = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str[i] == ch ) {
            counter++;
        }
    }
    alert(counter);
    return counter;
}
var strr = prompt("Enter String");
var chh = prompt("enter charater to find");
var cc=countt(strr,chh);
document.write("Text: " + strr + "<br>There are " + cc + " occurence(s) of character " + chh);
*/


//Task 14

/*
function calcCircumference(r){
    var circum=(2)*(Math.PI)*(r);
    return circum
}
function calcArea(r)
{
    var area=Math.PI*r*r;
    return area;
}
var r=prompt("enter radius of circle");
var result1=calcCircumference(r);
var result2=calcArea(r);
document.write("The Circumference is "+result1+"<br>");
document.write("The Area is "+result2);
*/

