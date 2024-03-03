function updateclock(){
    const now=new date();
    hours =now.getHours();
    const meridiem=hours>12? 'AM': 'PM';
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    const hours= now.gethours();
    const minutes=now.getminutes().toString().padStart(2,0);
    const seconds=now.getseconds().toString().padStart(2,0);
    const timestring='${hours}:${minutes}:${seconds}:${meridiem}';
    document.getElementById('clock').textcontent=timestring;
}
updateclock();
setInterval(updateclock, 1000);
console.log("hello");