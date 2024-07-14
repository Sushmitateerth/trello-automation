import { basePath } from '../constants/api'
import { apiKey, apiToken } from '../constants/env'

export function fetchLists(id) {
  const url = `${basePath}/boards/${id}/lists?key=${apiKey}&token=${apiToken}`
  return cy.request('GET', url).then((res) => console.log(res))
}

export function archiveList(id) {
  const url = `${basePath}/lists/${id}/closed?value=true&key=${apiKey}&token=${apiToken}`
  return cy.request('PUT', url)
}

export function createList(name, boardId) {
  const url = `${basePath}/lists?name=${name}&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`
  return cy.request('POST', url)
}
