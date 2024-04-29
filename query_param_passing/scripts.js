const queryString = decodeURIComponent(window.location.search);
const params = new URLSearchParams(queryString);
const key = params.get('key');
const value = params.get('val');

document.getElementById('paramKey').innerText = key + ": ";
document.getElementById('paramValue').innerText = value;

console.log("Query String: ", queryString);

async function main() {
    await liff.init({ liffId: "1660687033-5prxxNRm" })
}
main()