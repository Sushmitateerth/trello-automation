import { basePath } from '../constants/api'
import { apiKey, apiToken } from '../constants/env'

type List = {
  id: string
}

export function fetchLists(id: string) {
  const url = `${basePath}/boards/${id}/lists?key=${apiKey}&token=${apiToken}`
  return cy.request<List[]>('GET', url)
}

export function archiveList(id: string) {
  const url = `${basePath}/lists/${id}/closed?value=true&key=${apiKey}&token=${apiToken}`
  return cy.request<List>('PUT', url)
}

export function createList(name: string, boardId: string) {
  const url = `${basePath}/lists?name=${name}&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`
  return cy.request<List>('POST', url)
}
