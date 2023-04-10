//framework from for dropdown menu from https://stackoverflow.com/questions/68223406/how-to-create-select-dropdown-in-javascript-with-fetched-data-from-api
const storageList = document.getElementById("storage-list");
console.log({ storageList });
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};
let dropdownElementList = [].slice.call(document.querySelectorAll('.storage'))
let dropdownList = dropdownElementList.map(function (element) {
  return new bootstrap.Dropdown(element)
})
