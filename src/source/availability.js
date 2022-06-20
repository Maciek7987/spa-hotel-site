import { useState } from "react";

// //20 pokoji zwykłych numery 1-20 włącznie
// //10 apartamentów numery 27-36 włącznie
// //6 exclusive numery 21-26 włacznie

// //pokoje zwykłe z 1 sypialnia (6) 1-6
// //pokoje zwykłe z 2 sypialniami (14) 7-20

// //apartamenty z 1 sypialnia (5) 27-31
// //apartamenty z 2 sypialniami (5) 32-36

// //exclusive z 1 sypialnia (3) 21-23
// //exclusive z 2 sypialniami (3) 24-26

let array = {
  exclusive: {
    oneBedroom: [
      {
        id: 51,
        numberOfRoom: 24,
        name: "Nico",
        surname: "Alberts",
        phone: 876424008,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 25),
        checkOut: new Date(2022, 6, 25),
      },
      {
        id: 52,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 26),
        checkOut: new Date(2022, 7, 25),
      },
      {
        id: 52,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 14),
        checkOut: new Date(2022, 7, 25),
      },
    ],
    twoBedrooms: [
      {
        id: 53,
        numberOfRoom: 63,
        name: "Antionio",
        surname: "Filipaik",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2022, 5, 11),
        checkOut: new Date(2022, 5, 20),
      },
      {
        id: 54,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 13),
        checkOut: new Date(2022, 5, 20),
      },
    ],
  },
  apartment: {
    oneBedroom: [
      {
        id: 6666,
        numberOfRoom: 24,
        name: "Nico",
        surname: "Alberts",
        phone: 876424008,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 26),
        checkOut: new Date(2022, 6, 3),
      },
      {
        id: 6666,
        numberOfRoom: 24,
        name: "Nico",
        surname: "Alberts",
        phone: 876424008,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 26),
        checkOut: new Date(2022, 6, 3),
      },
      {
        id: 6666,
        numberOfRoom: 24,
        name: "Nico",
        surname: "Alberts",
        phone: 876424008,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 26),
        checkOut: new Date(2022, 6, 3),
      },
      {
        id: 6666,
        numberOfRoom: 24,
        name: "Nico",
        surname: "Alberts",
        phone: 876424008,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 26),
        checkOut: new Date(2022, 6, 3),
      },
      {
        id: 3333,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 5, 26),
        checkOut: new Date(2022, 6, 3),
      },
    ],
    twoBedrooms: [
      {
        id: 2222,
        numberOfRoom: 63,
        name: "Antionio",
        surname: "Filipaik",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2022, 6, 4),
        checkOut: new Date(2022, 6, 7),
      },
      {
        id: 2222,
        numberOfRoom: 63,
        name: "Antionio",
        surname: "Filipaik",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2022, 6, 4),
        checkOut: new Date(2022, 6, 7),
      },
      {
        id: 2222,
        numberOfRoom: 63,
        name: "Antionio",
        surname: "Filipaik",
        phone: 897754096,
        email: "chiacynt32@gamil.com",
        checkIn: new Date(2022, 6, 4),
        checkOut: new Date(2022, 6, 7),
      },
      {
        id: 3333,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 4),
        checkOut: new Date(2022, 6, 7),
      },
      {
        id: 3333,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 4),
        checkOut: new Date(2022, 6, 7),
      },
    ],
  },
  standard: {
    oneBedroom: [
      {
        id: 3333,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 1),
        checkOut: new Date(2022, 6, 1),
      },
      {
        id: 3333,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 1),
        checkOut: new Date(2022, 6, 1),
      },
      {
        id: 3333,
        numberOfRoom: 1,
        name: "Maradnionio",
        surname: "Delazqz",
        phone: 687231902,
        email: "fdddsse@gamil.com",
        checkIn: new Date(2022, 6, 1),
        checkOut: new Date(2022, 6, 1),
      },
    ],
    twoBedrooms: [
      {
        id: "A",
        checkIn: new Date(2022, 6, 1),
        checkOut: new Date(2022, 6, 3),
      },
      {
        id: "X",
        checkIn: new Date(2022, 6, 2),
        checkOut: new Date(2022, 6, 4),
      },
      {
        id: "Y",
        checkIn: new Date(2022, 6, 3),
        checkOut: new Date(2022, 6, 5),
      },
      {
        id: "Z",
        checkIn: new Date(2022, 6, 7),
        checkOut: new Date(2022, 6, 10),
      },
    ],
  },
};

const maxNumberOfRooms = {
  exclusive: {
    oneBedroom: 3,
    twoBedrooms: 3,
    both: 6,
  },
  apartment: {
    oneBedroom: 5,
    twoBedrooms: 5,
    both: 10,
  },
  standard: {
    oneBedroom: 6,
    twoBedrooms: 14,
    both: 20,
  },
};

let maxRooms;
let arr = [];
let results;
let allDaysOfCurrentBook = [],
  allDaysOfWholeReservations = [];





const check = (name, countOfBed, flag) => {
  console.log(name, countOfBed);

  switch (name) {
    case "Exclusive Room":
      if (countOfBed === 2 || (countOfBed === 3 && flag === "two")) {
        arr = array.exclusive.twoBedrooms;
        maxRooms = maxNumberOfRooms.exclusive.twoBedrooms;
      } else if (countOfBed === 1 || (countOfBed === 3 && flag === "one")) {
        arr = array.exclusive.oneBedroom;
        maxRooms = maxNumberOfRooms.exclusive.oneBedroom;
      }
      break;
    case "Apartment Room":
      if (countOfBed === 2 || (countOfBed === 3 && flag === "two")) {
        arr = array.apartment.twoBedrooms;
        maxRooms = maxNumberOfRooms.apartment.twoBedrooms;
      } else if (countOfBed === 1 || (countOfBed === 3 && flag === "one")) {
        arr = array.apartment.oneBedroom;
        maxRooms = maxNumberOfRooms.apartment.oneBedroom;
      }
      break;
    case "Standard Room":
      if (countOfBed === 2 || (countOfBed === 3 && flag === "two")) {
        arr = array.standard.twoBedrooms;
        maxRooms = maxNumberOfRooms.standard.twoBedrooms;
      } else if (countOfBed === 1 || (countOfBed === 3 && flag === "one")) {
        arr = array.standard.oneBedroom;
        maxRooms = maxNumberOfRooms.standard.oneBedroom;
      }
      break;
    default:
      console.log("none");
      break;
  }

  // all days
  arr.forEach((book) => {
    //whole time of one reservation divided for one day, result is count of days
    results = (book.checkOut.getTime() - book.checkIn.getTime()) / 86400000;
    //push first day
    allDaysOfCurrentBook.push(book.checkIn.getTime());
    //push rest of days
    for (let i = 0; i < results; i++) {
      allDaysOfCurrentBook.push(allDaysOfCurrentBook[i] + 86400000);
    }
    //array with all days of reservations with selected room with defined number of guests, to it add poszczególne dni każdej rezerwacji
    allDaysOfCurrentBook.forEach((day) => {
      allDaysOfWholeReservations.push(day);
    });
    allDaysOfCurrentBook = [];
  });

  //covering days in which, all of selected room are busy
  const arrayTerminsReservation = [];
  const coveringDays = {};

  allDaysOfWholeReservations.forEach((x, key) => {
    coveringDays[x] = (coveringDays[x] || 0) + 1;
  });
  allDaysOfWholeReservations = [];

  for (const [key, value] of Object.entries(coveringDays)) {
    if (value >= maxRooms) arrayTerminsReservation.push(key);
  }

  return arrayTerminsReservation;
};



const arrayForValidCoordinates = {
  test: (name, guests, flag, thirdGuestAge) => {
    let countOfBed;
    let nameOfRoom = name;
    //[0]-adults [1]-children
    if (guests[0] === 1) {
      countOfBed = 1;
    }
    if (guests[0] + guests[1] >= 2 && thirdGuestAge === "<6") {
      countOfBed = 3;
    }
    if (guests[0] + guests[1] >= 4 || guests[0] >= 3) {
      countOfBed = 2;
    }

    return check(nameOfRoom, countOfBed, flag);
  },
};

export default arrayForValidCoordinates;

//show only this date at which haven't free rooms for selected (two or one bedrooms)
// if number of adults is 1 then show only rooms with one bedroom
// if number of guests is 2 or 3 then show one and two bedrooms
// if number of guests is 4 or number of adult is 3 then show only two bedrooms

// for selected room with a given number of bedrooms, check if ten of reservation has common period to disable this termin
// you could say that on the "millisecond" axis we extract ranges which will be already booked
