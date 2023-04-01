//framework from for dropdown menu from https://stackoverflow.com/questions/68223406/how-to-create-select-dropdown-in-javascript-with-fetched-data-from-api
const storageList = document.getElementById("storage-list");
console.log({ storageList });
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

const displayOption = async () => {
  const options = await getPost();
  for (option of options) {
    const newOption = document.createElement("option");
    newOption.value = option.username;
    newOption.text = option.name;
    batchTrack.appendChild(newOption);
  }
};