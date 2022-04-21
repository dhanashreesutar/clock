let str='07:05:45PM';
let hh=str.slice(0,2);
  let mm=str.slice(3,5)
  let ss=str.slice(6,8)
  let time1="";
  parseInt(hh);
  parseInt(mm);



  
if(str.includes('AM')){
  console.log(hh +":"+ mm+":"+ss);
  if(hh==12 && mm>0){
    hh='00';
     time1=hh+":"+ mm+":"+ss;
}else if(hh==12 && mm==00){
  hh='00';
  mm='00';
  time1=hh+":"+ mm+":"+ss;
}else {
   time1=hh+":"+ mm+":"+ss;
  }
console.log(time1, typeof time1);
}

if(str.includes('PM')){
 
  if(hh<12){
    hh=parseInt(hh)+12;
  }
 
  let time1= hh+":"+mm+":"+ss;
  console.log(time1);
}
console.log('this is second change')


