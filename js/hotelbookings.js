
var hotelCal = {
    maxRooms : 50,
    takenRooms : 30,
    availableRooms : 20
};

function availability(outputAR) {
    outputAR.innerText = hotelCal.availableRooms;
}

function notEnoughRooms(msg) {
    msg.innerText = "Not enough rooms available!";
}

function notPossible(msg) {
    msg.innerText = "There aren't enough rooms in the hotel!";
}

var outputAR = document.getElementById("outputAR");
availability(outputAR);

document.getElementById("hotelSubmit").addEventListener("click", function() {
    var roomsNeeded = document.getElementById("roomsNeeded").value;
    var outputAR = document.getElementById("outputAR");
    var msg = document.getElementById("message");

    //if the input is less than 1, show error message!
    if (roomsNeeded < 1) {
        msg.innerText = "U dumb? Put in positive numbers you twatface..."
    }

    //if there are enough rooms, remove amount of rooms from availableRooms and show message confirming booking!
    else if (hotelCal.availableRooms >= roomsNeeded) {
        hotelCal.availableRooms = hotelCal.availableRooms - roomsNeeded;
        hotelCal.takenRooms = hotelCal.takenRooms + roomsNeeded;
        availability(outputAR);
        msg.innerText = "Your booking is complete!";
    }
    //If there aren't enough rooms in the hotel!
    else if (roomsNeeded >= hotelCal.maxRooms) {
        notPossible(msg);
    }

    //if there aren't enough rooms available at the time!
    else if (roomsNeeded >= hotelCal.availableRooms) {
        notEnoughRooms(msg);
    }
});

document.getElementById("hotelUnbook").addEventListener("click", function() {
    var roomUnbook = document.getElementById("roomsUnbook").value;
    var unbookMsg = document.getElementById("unbookMsg");
    var outputAR = document.getElementById("outputAR");

    if (roomUnbook < 1) {
        unbookMsg.innerText = "U dumb? Put in positive numbers you twatface...";
    }

    else if (roomUnbook >= hotelCal.maxRooms) {
        unbookMsg.innerText = "U dumb? We don't even have that many rooms...";
    } 

    else if(roomUnbook >= hotelCal.takenRooms) {
        unbookMsg.innerText = "You did not have this many rooms!";
    }

    else if(hotelCal.takenRooms >= roomUnbook) {
        console.log(hotelCal.takenRooms);
        hotelCal.availableRooms = hotelCal.availableRooms + Number(roomUnbook);
        hotelCal.takenRooms = hotelCal.takenRooms - roomUnbook;
        availability(outputAR);
        unbookMsg.innerText = "You are now checked out!";
    }
});
