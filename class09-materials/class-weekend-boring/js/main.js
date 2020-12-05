document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
 if (day === "thursday" || day === "Tuesday") {
   console.log(`${day} is a class day Silly....`)
 } else {
  console.log('Clearly not a class day.... RIP... time for JS projects')
 }

}
