// Define the database as an object
const HomeInventoryDatabase = {}


// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// The ink well is a craft data item
const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
  // The writing desk is a furniture data item
  const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }


  function createDataItem (name, location, description) {
      const newObject = {};
      newObject.name = name;
      newObject.location = location;
      newObject.description = description;
      return newObject;
  }

  const tvStand = createDataItem("TV Stand", "Living Room", "White Ikea set for television");
  const coffeeTable = createDataItem("Coffee Table", "Living Room", "Birchwood Coffee Table");
  const sofa = createDataItem("Sofa", "Living Room", "Teal green couch");
  const playstation = createDataItem("Playstation", "On the tv stand in the living room", "a great piece of japanese technology");
  const pencils = createDataItem("Pencils", "Desk", "Pencils from ancient China");
  const headphones = createDataItem("Headphones", "On the coffeetable", "Great wireless headphones")

  console.log(vintageInkwell);
  console.log(tvStand);
  console.log(headphones);
  console.log(sofa);
  console.log(pencils);

HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)

HomeInventoryDatabase.furniture.push(tvStand);
HomeInventoryDatabase.furniture.push(coffeeTable);
HomeInventoryDatabase.furniture.push(sofa);
HomeInventoryDatabase.electronics.push(playstation);
HomeInventoryDatabase.crafts.push(pencils);
HomeInventoryDatabase.electronics.push(headphones);

console.log(HomeInventoryDatabase.electronics)


//// Saving the local database

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
   const stringifiedDatabase = JSON.stringify(databaseObject)

   /*
       Create a key in local storage, and store the string
       version of your inventory database as the value
   */
   localStorage.setItem(localStorageKey, stringifiedDatabase)

}
  

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")

console.log(loadDatabase("HomeInventory"))