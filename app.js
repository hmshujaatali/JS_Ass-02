                //QUSETION#1
// var a=10
// document.write("Result:<br/>")
// document.write("The value of a is: ",a,"<br/>")
// document.write("<br/>-----------------------------<br/><br/>")
// document.write("The value of ++a is: ",++a,"<br/>")
// document.write("Now the value of a is: ",a,"<br/><br/><br/><br/>")
// document.write("The value of a++ is: ",a++,"<br/>")
// document.write("Now the value of a is: ",a,"<br/><br/><br/><br/>")
// document.write("The value of ++a is: ",--a,"<br/>")
// document.write("Now the value of a is: ",a,"<br/><br/><br/><br/>")
// document.write("The value of a++ is: ",a--,"<br/>")
// document.write("Now the value of a is: ",a,"<br/><br/><br/><br/>")
                //QUSETION#2
// var a=2,b=1,result=--a - --b + ++b + b--;
// document.write("a: ",a,"<br/>b: ",b,"<br/>result: ",result)
// document.write("<br/>--a: ",--a)
// document.write("<br/>--a - --b: ",--a - --b)
// document.write("<br/>--a - --b + ++b: ",--a - --b + ++b)
// document.write("<br/>--a - --b + ++b + b--: ",--a - --b + ++b + b--)
//                 QUSETION#3
// var name=prompt("Dear USER,Please Enter Your Beautiful NAME ")
// document.write("Hello Dear ",name," Welcome to our website<br/>Greetings and Blessings")
//                 QUSETION#5
// var a=+prompt("Enter a Table Number")
// var c=+prompt("Run the table till")
// for(var i=1; i<=c; i++)
// {
//   if(a==5)
//    {         document.write(a,"x",i,"=",a*i," <br/>")
// }
// else{
//  for(var i=1; i<=c; i++)
// {document.write(a,"x",i,"=",a*i," <br/>")
// }}
// }
//                 QUSETION#6
var sub1name=prompt("Enter 1st subject name")
var sub2name=prompt("Enter 2nd subject name")
var sub3name=prompt("Enter 3rd subject name")
var sub1obtnumber=+prompt("Enter 1st Subject Obt. Number")
var sub2obtnumber=+prompt("Enter 2nd Subject Obt. Number")
var sub3obtnumber=+prompt("Enter 3rd Subject Obt. Number")
var sub1totalnumber=100
var sub2totalnumber=100
var sub3totalnumber=100
var sub1per=((sub1obtnumber/sub1totalnumber)*100)
var sub2per=((sub2obtnumber/sub2totalnumber)*100)
var sub3per=((sub3obtnumber/sub3totalnumber)*100)
var totalobtnum=sub1obtnumber+sub2obtnumber+sub3obtnumber
var totaltotnum=sub1totalnumber+sub2totalnumber+sub3totalnumber
var totalper=(sub1per+sub2per+sub3per)/3

document.write("Subject ","Total Marks ","Obtained Marks ","Percentage","<br/>",
sub1name," ",sub1totalnumber," ",sub1obtnumber," ",sub1per,"%","<br/>",
sub2name," ",sub2totalnumber," ",sub2obtnumber," ",sub2per,"%","<br/>",
sub3name," ",sub3totalnumber," ",sub3obtnumber," ",sub3per,"%","<br/>",
" "," ",totalobtnum," ",totaltotnum," ",totalper,"%")