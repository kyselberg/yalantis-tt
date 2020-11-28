import React from 'react'
import {monthNames} from '../../../assets/js/constants'

const BirthdaysItem = ({bKey, bValue}) => {
  const getDate = el => {
    const date = new Date(el.dob)
    const month = monthNames[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${day} ${month}, ${year} year`
  }

  return (
    <>
      <h2>{bValue}</h2>
      <ul>
        {bKey[bValue].map(el => {
          return (
            <li key={el.id}>
              {`${el.lastName} ${el.firstName}`} - {getDate(el)}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BirthdaysItem
