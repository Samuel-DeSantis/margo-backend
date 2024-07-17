let URL = 'http://127.0.0.1:3000/'

async function getIndex(subDir) {
  const response = await fetch(URL + subDir)
  const index = await response.json()
  return index
}

async function createRecord(path, data) {
  const response = await fetch(URL + path, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( data )
  })
  const record = await response.json()
  return record
}
let record = {
  "project":  {
    "name": 'PG&E',
    'user_id': 1
  }
}
createRecord('/projects', record).then(data => console.log(data))

let status = true

// while(status){
//   const userInput = prompt("Enter subdir or command: ")
//   console.log(userInput)
//   if(userInput == 'exit') {
//     status = false
//   } else if(userInput == 'clear') {
//     console.clear()
//   } else if(userInput == 'new') {
//     const path = prompt("Enter the path for the new record: ")
//     const data = prompt("Enter the data for the new record: ")
//     // await createRecord(path, data)
//   } else {
//     await getIndex(userInput).then(data => console.table(data))
//   }
// }
