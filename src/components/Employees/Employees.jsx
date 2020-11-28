import React from 'react'
import {ALPHABET} from '../../assets/js/constants'
import EmployeesItem from './EmployeesItem/EmployeesItem'
import classes from './Employees.module.css'

const Employees = ({bList, onChange, list}) => {
  const listByLetter = letter =>
    list.filter(person => person.lastName[0] === letter)

  return (
    <>
      <h1>Employees</h1>
      <div className={classes.Employees_Body}>
        {ALPHABET.map(letter => {
          return (
            <EmployeesItem
              bList={bList}
              onChange={onChange}
              letter={letter}
              list={listByLetter(letter)}
              key={letter}
            />
          )
        })}
      </div>
    </>
  )
}

export default Employees
