// ITERATION 1

// Suspects Collection

class Suspect {
    constructor(nickName, fullName, lastName, occupation, age, description, image, color) {
        this.nickName = nickName
        this.firstName = fullName
        this.lastName = lastName
        this.occupation = occupation
        this.age = age
        this.description = description
        this.image = image
        this.color = color
    }
}

let suspect1 = new Suspect("mrGreen", "Jacob" , "Green", "Entrepreneur", 45 , "He has a lot of connections", "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "green")
let suspect2 = new Suspect("drOrchid", "Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white")
let suspect3 = new Suspect("profPlum", "Victor", "Plum", "Designer", 22, "Billionaire video game designer", "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", "purple")
let suspect4 = new Suspect("missScarlet","Kasandra", "Scarlet", "Actor", 31, "She is an A-list movie star with a dark past", "https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red")
let suspect5 = new Suspect("mrsPeacock", "Eleanor", "Peacock", "Socialité", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue")
let suspect6 = new Suspect("mrMustard", "Jack", "Mustard", "Retired Football player", 62, "He is a former football player who tries to get by on his former glory","https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow")

const suspectsArray = [suspect1, suspect2, suspect3, suspect4, suspect5, suspect6]


// Rooms Collection

class Room {
    constructor(roomName) {
        this.name = roomName
    }
}

let room1 = new Room("Dining Room")
let room2 = new Room("Conservatory")
let room3 = new Room("Kitchen")
let room4 = new Room("Study")
let room5 = new Room("Library")
let room6 = new Room("Billiard Room")
let room7 = new Room("Lounge")
let room8 = new Room("Ballroom")
let room9 = new Room("Hall")
let room10 = new Room("Spa")
let room11 = new Room("Living Room")
let room12 = new Room("Observatory")
let room13 = new Room("Theater")
let room14 = new Room("Guest House")
let room15 = new Room("Patio")

const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15]


// Weapons Collection

class Weapon {
    constructor(weaponName, weight) {
        this.name = weaponName
        this.weight = weight
    }
}

let weapon1 = new Weapon("rope", 10)
let weapon2 = new Weapon("knife", 8)
let weapon3 = new Weapon("candlestick", 2)
let weapon4 = new Weapon("dumbbell", 30)
let weapon5 = new Weapon("poison", 2)
let weapon6 = new Weapon("axe", 15)
let weapon7 = new Weapon("bat", 13)
let weapon8 = new Weapon("trophy", 25)
let weapon9 = new Weapon("pistol", 20)

const weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9]

// ITERATION 2

// random object picker
function selectRandom(myArray) {
    let i  = Math.floor(Math.random() * myArray.length); 
    return myArray[i]
}

// puts random objects of argument in object of 3 objects and returns object
function pickMystery(arrayWithSuspects, arrayWithWeapons, arrayWithRooms) {
    let clues =  {
        suspect: selectRandom(arrayWithSuspects),
        weapon: selectRandom(arrayWithWeapons),
        room: selectRandom(arrayWithRooms)
        }
    return clues
}


// ITERATION 3
// prints certain positions of arrays suspect, weapon and room
function revealMystery(envelope) {
    console.log(`${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`)
}


// initialize program: invoke function by passing in the arrays with provided data.
revealMystery(pickMystery(suspectsArray, weaponsArray, roomsArray))