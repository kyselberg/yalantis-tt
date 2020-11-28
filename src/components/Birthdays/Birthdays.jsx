import React from 'react'
import {monthNames} from '../../assets/js/constants'
import BirthdaysItem from './BirthdaysItem/BirthdaysItem'
import classes from './Birthdays.module.css'

const Birthdays = ({birthdayList}) => {
  let listElement = <h3 style={{color: 'red'}}>No selected employees</h3>

  if (birthdayList.length) {
    const bList = birthdayList.reduce((acc, el) => {
      const d = new Date(el.dob)
      const m = monthNames[d.getMonth()]
      acc[m] = acc[m] ? acc[m].concat([el]) : [el]
      return acc
    }, {})
    listElement = Object.keys(bList).map(el => {
      return <BirthdaysItem key={el} bKey={bList} bValue={el} />
    })
  }

  return (
    <div>
      <h1>Employees birthday</h1>
      <div className={classes.Birthdays}>{listElement}</div>
    </div>
  )
}

export default Birthdays
