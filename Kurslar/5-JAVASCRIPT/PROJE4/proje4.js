const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)')
getFromLocalStorage();
calculateTotal();


container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();

    }
});

select.addEventListener('change',function(e){
    calculateTotal();

});

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');
    let selectedSeatCount = selectedSeats.length;

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount*select.value;


    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage(){
const selectedSeats = JSON.parse(localStorage.getItem('selectedseats'));

if(selectedSeats != null && selectedSeats.length>0){
    seats.forEach(function(seat, index){
        if (selectedSeats.indexOf(index) > -1){
            seat.classList.add('seleted');
        }
    });
}



const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

if(selectedMovieIndex != null){
    select.selectedIndex = selectedMovieIndex;
}


}

function saveToLocalStorage(indexs){ 
    localStorage.setItem('selectedSteats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndexs', select.selectedIndex);
}











