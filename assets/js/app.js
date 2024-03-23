const usersEndpoint = 'https://api.github.com/users'; //I merged the link
const $n = document.querySelector('.name'); //the class selector . was missing
const $b = document.querySelector('.blog'); //blog is a class not an id (needs . instead of #)
const $l = document.querySelector('.location');

async function displayUser(username) {  //this function must be async
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  //I wrote this line to turn json into object
  console.log(data);
  $n.textContent = `${data.name}`;  //Template literals goes with `` instead of ''
  $b.innerHTML = `<a href="${data.blog}">${data.blog}</a>`  //I turned this into an anchor with innerHTML
  $l.textContent = `${data.location}`;  //Template literals goes with `` instead of ''
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`  //the variable name is $n with dollar sign
}
displayUser('stolinski').catch(handleError()); //I still have no idea how catch works srry :(
