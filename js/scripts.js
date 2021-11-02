//Ticket Business Logic
function Checkout() {
  this.tickets = {};
  this.ticketNumber = 0;
}

function Ticket(age, time, movie){
  this.age = age;
  this.time = time;
  this.movie = movie;
  this.cost = this.cost();
}

Checkout.prototype.addTicket = function(ticket) {
  ticket.ticketNumber = this.addTicketNumber();
  this.tickets[ticket.ticketNumber] = ticket;
}

Checkout.prototype.addTicketNumber = function() {
  this.ticketNumber +=1;
  return this.ticketNumber;
}

let checkout = new Checkout();

Ticket.prototype.cost = function(){
  let ageModifier = 0;
  let timeModifier = 0;
  let movieModifier = 0;
  let total = 0;
  if(this.age === "seniors"){
    ageModifier = 5;
  }
  else if(this.age === "standard"){
    ageModifier = 10;
  }
  else{
    ageModifier = 3;
  }

  if(this.time === "afternoon"){
    timeModifier = 5
  }
  else if(this.time === "evening"){
    timeModifier = 10;
  }
  else{
    timeModifier = 3;
  }

  if(this.movie === "dispatch"){
    movieModifier = 5;
  }
  else if(this.movie === "dune"){
    movieModifier = 10;
  }
  else{
    movieModifier = 3;
  }

  total = timeModifier + ageModifier + movieModifier;
  return total;
}
//UI Logic


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const age = $("#age").val();
    const time = $("#time").val();
    const movie = $("#movie").val();
    let newTicket = new Ticket(age, time, movie);
    checkout.addTicket(newTicket);
    // $(".output").html(newTicket.cost())
    $("ol#receipt").empty();
    for (let i = 1; i <= checkout.ticketNumber; i++) {
      $("ol#receipt").append("<li id='" + checkout.tickets[i].ticketNumber + "'>" + checkout.tickets[i].movie + "</li>");
    }
  });
});

