let URL = 'http://127.0.0.1:3000'

/*------------------------------
INDEX - GET - Return all records
------------------------------*/
async function getRecords(subDir) {
  const response = await fetch(`${URL}/${subDir}`)
  const index = await response.json()
  return index
}

/*-------------------------------
SHOW - GET - Return single record
-------------------------------*/
async function getRecord(subDir, id) {
  const response = await fetch(`${URL}/${subDir}/${id}`)
  const index = await response.json()
  return index
}
/*---------------------------
CREATE - POST - Create record
---------------------------*/
async function createRecord(subDir, data) {
  const response = await fetch(`${URL}/${subDir}`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( JSON.parse(data) )
  })
  const record = await response.json()
  return record
}

/*--------------------------
EDIT - PATCH - Update record
--------------------------*/
async function updateRecord(subDir, id, data) {
  const response = await fetch(`${URL}/${subDir}/${id}`, {
    method: 'PATCH',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( JSON.parse(data) )
  })
  const record = await response.json()
  return record
}

/*------------------------------
DESTROY - DELETE - Delete record
------------------------------*/
async function deleteRecord(subDir, id) {
  const response = await fetch(`${URL}/${subDir}/${id}`, { method: 'DELETE' })
  console.log(response)
}

/*----------------
let record = {
  "project":  {
    "name": 'PG&E',
    'user_id': 1
  }
}
----------------*/

let status = true

while(status){
  const userInput = prompt("Enter command: ")
  switch(userInput) {
    case 'read':
      let readDir = prompt("Enter subdir: ")
      await getRecords(readDir).then(data => console.log(data))
      break
    case 'show':
      let showDir = prompt("Enter subdir: ")
      let showId = prompt("Enter ID: ")
      await getRecord(showDir, showId).then(data => console.log(data))
      break
    case 'new':
      let createDir = prompt("Enter subdir: ")
      let newRecord = prompt("Enter record: ")
      await createRecord(createDir, newRecord).then(data => console.log(data))
      break
    case 'update':
      let updateDir = prompt("Enter subdir: ")
      let updateId = prompt("Enter record id: ")
      let record = prompt("Enter record: ")
      await updateRecord(updateDir, updateId, record).then(data => console.log(data))
      break
    case 'delete':
      let deleteDir = prompt("Enter subdir: ")
      let deleteId = prompt("Enter record id: ")
      await deleteRecord(deleteDir, deleteId).then(data => console.log(data))
      break
    case 'clear':
      console.clear()
      break
    case 'exit':
      status = false
      break
    default:
      console.log('ERROR:COMMAND::NOT_FOUND')
      console.log('Please try: read, show, new, update, delete, clear, or exit')
  }
}
