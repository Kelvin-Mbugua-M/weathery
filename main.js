const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function time_Date(){
    let todayDate = new Date();
    let amCheck = "AM";
    {todayDate.getHours() <12?amCheck="AM":amCheck="PM";}
    let seconds = todayDate.getSeconds();
    
    let dateToday= `${todayDate.getDate()<10 ? "0":""}${todayDate.getDate()}  ${months[todayDate.getMonth()]}  ${todayDate.getFullYear()} `;
    let time = `${todayDate.getHours()>10?"0":""}${todayDate.getHours()>=12?todayDate.getHours()-12:todayDate.getHours()}:${todayDate.getMinutes()<10?"0":""}${todayDate.getMinutes()} ${amCheck}`;
    // 05 : 11 AM 
    // 25 july 2024
    console.log(time,'\n',dateToday,'\n',todayDate.getDay(1));
    console.log(days[todayDate.getDay()])
}
time_Date();
