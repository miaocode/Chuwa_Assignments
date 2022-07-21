//#1 table
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
//creating a div for the table
let tableDiv = document.createElement("div");
tableDiv.className = "table";
let divText = document.createElement("h1");
divText.textContent = "1. Table";
let userTable = document.createElement("table");
userTable.id = "users";
document.body.appendChild(tableDiv);
tableDiv.appendChild(divText);
tableDiv.appendChild(userTable);

//using a function to auto generate the header and content
let createTable = function (header, content) {
  let tr = document.createElement("tr");
  userTable.appendChild(tr);
  let headerArr = header.map((h) => {
    let thead = document.createElement("th");
    thead.textContent = h;
    return thead;
  });
   tr.append(...headerArr);

  content.forEach((c) => {
    let tr = document.createElement("tr");
    userTable.appendChild(tr);
    let contentArr = Object.values(c).map((user) => {
      let td = document.createElement("td");
      td.textContent = user;
      return td;
    });
    tr.append(...contentArr);
  });
};
createTable(tableInfo.tableHeader, tableInfo.tableContent);

//#2 ordered and unordered list
let listsDiv = document.createElement("div");
listsDiv.className = "lists";
let listsText = document.createElement("h1");
listsText.textContent = "2. Ordered list and unorder list";
let orderedLi = document.createElement("ol");
let unorderedLi = document.createElement("ul");
document.body.appendChild(listsDiv);
listsDiv.appendChild(listsText);
listsDiv.appendChild(orderedLi);
listsDiv.appendChild(unorderedLi);

//auto generate the list with a function
let generateLi = function (list, appendTo) {
  let listArr = list.map((el) => {
    let li = document.createElement("li");
    li.textContent = el;
    return li
  });
  appendTo.append(...listArr);
};

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
generateLi(list, orderedLi);
generateLi(list, unorderedLi);

//#3 dropdown list
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
let dropdownList = document.createElement("div");
dropdownList.className = "dropdownList";
let dropdownText = document.createElement("h1");
dropdownText.textContent = "3. Dropdown list";
let dropdown = document.createElement("select");
dropdown.name = "cities";
dropdown.id = "city-dropdown";
document.body.appendChild(dropdownList);
dropdownList.appendChild(dropdownText);
dropdownList.appendChild(dropdown);

//using a functon to auto generate the dropdown list
let dropdownArr = dropDownList.map((city) => {
  let option = document.createElement("option");
  option.value = city.value;
  option.textContent = city.content;
  return option;
});
dropdown.append(...option);
