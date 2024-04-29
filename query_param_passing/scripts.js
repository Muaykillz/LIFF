const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const key = params.get('key');
const value = params.get('val');

document.getElementById('paramKey').innerText = key + ": ";
document.getElementById('paramValue').innerText = value;

console.log("Query String: ", queryString);