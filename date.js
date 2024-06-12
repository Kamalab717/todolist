exports.getDate=function(){
const today=new Date();
const options={
    weekday:"long",
    month:"long",
    day:"numeric"
};
var days=today.toLocaleDateString("en-US",options);
return days;
}

exports.getDay=function(){
const today=new Date();
const options={
    weekday:"long",
};
var days=today.toLocaleDateString("en-US",options);
return days;
}