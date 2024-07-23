import { basePath } from '../constants/api'
import { apiKey, apiToken } from '../constants/env'

export type Board = {
  id: string
  name: string
}

export function createBoard(name: string) {
  const url = `${basePath}/boards?name=${name}&key=${apiKey}&token=${apiToken}`
  return cy.request<Board>('POST', url)
}

export function deleteBoard(id: string) {
  const url = `${basePath}/boards/${id}?key=${apiKey}&token=${apiToken}`
  return cy.request<void>('DELETE', url)
}
