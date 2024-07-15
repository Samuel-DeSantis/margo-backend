let URL = 'http://127.0.0.1:3000/'

async function getIndex(subDir) {
  const response = await fetch(URL + subDir)
  const index = await response.json()
  return index
}

let status = true

while(status){
  const userInput = prompt("Enter subdir or command: ")
  console.log(userInput)
  if(userInput === 'exit') {
    status = false
  } else if(userInput == 'clear') {
    console.clear()
  } else {
    await getIndex(userInput).then(data => console.table(data))
  }
}
