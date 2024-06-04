let cardsCity = document.getElementById('cardsCity');
let addElementsZoom = document.getElementById('addElementsZoom');
const dateCard1=document.getElementById('dateCard1');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let countOfCards = 0;
console.log()



function CheckIfToaddCards(){
    countOfCards > 33? null:addCards();
}
function addCards(){
    let cityAvail=['Carlifornia','Texas','Florida'];
    const cardContainer = document.createElement('div');
    const cityNameContainer = document.createElement('article');
    const cityStateContainer = document.createElement('article');
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-cloud-showers-heavy';
    cardContainer.className= 'card`${countOfCards+11}`';
    cityNameContainer.value =cityAvail[`${countOfCards%10}`];
    cardContainer.appendChild(icon);
    cardContainer.appendChild(cityNameContainer);
    cardContainer.appendChild(cityStateContainer);
    cardsCity.appendChild(cardContainer);
    sessionStorage.addItem('card1',JSON.stringify(cardContainer));
    return countOfCards+=11;

}
function time_Date(){
    let todayDate = new Date();
    let amCheck = "AM";
    {todayDate.getHours() <12?amCheck="AM":amCheck="PM";} 
    let dateToday= `${todayDate.getDate()<10 ? "0":""}${todayDate.getDate()}  ${months[todayDate.getMonth()]}  ${todayDate.getFullYear()} `;
    let time = `${todayDate.getHours()>10?"0":""}${todayDate.getHours()>=12?todayDate.getHours()-12:todayDate.getHours()}:${todayDate.getMinutes()<10?"0":""}${todayDate.getMinutes()} ${amCheck}`;
    dateCard1.value = dateToday + time ;
    console.log(`${ dateCard1.value}`);
}
const callTimeDate = setInterval(time_Date(),200);





addElementsZoom.addEventListener('click',CheckIfToaddCards());