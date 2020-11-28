import axios from 'axios'
import {LINK} from './constants'

export function getTheList() {
  return new Promise(resolve => {
    axios.get(LINK).then(resp => {
      const list = sortList(resp.data).map(person => ({
        ...person,
        checked: false
      }))
      resolve(list)
    })
  })
}

function sortList(data) {
  return data.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1
    }
    if (a.lastName > b.lastName) {
      return 1
    }
    return 0
  })
}
