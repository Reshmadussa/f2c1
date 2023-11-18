const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers=data.filter((person) =>person.profession === 'developer');
  console.log(developers);
}


// 2. Add Data
function addData() {
  const name=prompt("Enter name:");
   const age = prompt("Enter age:");
  const profession = prompt("Enter profession:");
  let newData={ name: name, age: parseInt(age), profession: profession};
  data.push(newData);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  const filterdata=data.filter((person) => person.profession !== 'admin');
  console.log("Removed Admins:", filterdata);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray=[
    { name: "diana", age: 30, profession: "designer"},
    { name: "dolly", age: 28, profession: "developer"},
  ];
  const resultArray=data.concat(dummyArray);
  console.log("Concatenated Array:", resultArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  console.log("At least one person is above 25:", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log("Unique Professions:", [...professions]);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const updatedlist = data.map((person) =>{
    if(person.name === 'john'){
      return {...person,profession:'manager'};
    }
    return person;
});
  console.log(updatedlist);
  }


// 10. Profession Count
function getTotalProfessions() {
  const developers = data.filter(dev => dev.profession.toLowerCase() === 'developer');
  const admins = data.filter(dev => dev.profession.toLowerCase() === 'admin');
  console.log(`Total Developers: ${developers.length}, Total Admins: ${admins.length}`);
}
