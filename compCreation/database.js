function getLocalData(nameTag) {
    const getData = localStorage.getItem(nameTag)
    return JSON.parse(getData);
    // return parseData
}

const localData = getLocalData("HomeInventory");

console.log(localData);

// const createSection = document.createElement("section");
// document.querySelector("#myStuff").appendChild(createSection);
// const grabSection = document.querySelector("section");
// grabSection.innerHTML = "Hey Guys";
// console.log(grabSection)



    // for (let key in localData) {
    //     const createSection = document.createElement("section");
    //     document.querySelector("#myStuff").appendChild(createSection);
    //     const grabSection = document.querySelector("section");
    //     const createPara = document.createElement("p");
    //     document.querySelector("section").appendChild(createPara);
    //     const getPara = document.querySelector("p");


    //     for (let i = 0; i < key.length; i++) {

    //         getPara.innerHTML += `${key[i]}`;
    //         grabSection.appendChild(getPara);
    //     }
    //     grabSection.innerHTML +=  getPara;
    // }


// completingPractice();




