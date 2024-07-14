const env = require('../cypress.env.json')

const { key, token } = env

async function cleanupBoards() {
  const ids = await getBoardIds()
  console.log(`deleting boards:\n${ids.join('\n')}`)
  if (ids.length === 0) {
    console.log('no boards to delete')
  }

  const getUrl = (boardId) => `https://api.trello.com/1/boards/${boardId}?key=${key}&token=${token}`

  ids.forEach((id) => fetch(getUrl(id), { method: 'DELETE' }).then((res) => console.log(res.status, res.statusText)))
}

function getBoardIds() {
  const url = `https://api.trello.com/1/tokens/${token}/member?key=${key}&token=${token}`

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.idBoards)
}

cleanupBoards()
