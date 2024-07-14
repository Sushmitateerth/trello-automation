import { basePath } from '../constants/api'
import { apiKey, apiToken } from '../constants/env'

export function createBoard(name) {
  const url = `${basePath}/boards?name=${name}&key=${apiKey}&token=${apiToken}`
  return cy.request('POST', url)
}

export function deleteBoard(id) {
  const url = `${basePath}/boards/${id}?key=${apiKey}&token=${apiToken}`
  return cy.request('DELETE', url)
}
