import React from 'react'
import classes from './EmployeesItem.module.css'

const EmployeesItem = ({bList, onChange, letter, list}) => {
  const isChecked = el => bList.some(per => per.id === el.id)

  const toggleElementHandler = el => {
    if (!isChecked(el)) {
      el.checked = true
      onChange(prev => [...prev, el])
    } else {
      el.checked = false
      const index = bList.findIndex(per => per.id === el.id)
      const clearedList = bList.filter((_, i) => i !== index)
      onChange(clearedList)
    }
  }

  let personsList = <h2>----</h2>

  if (list.length) {
    personsList = list.map(p => {
      return (
        <li key={p.id} className={classes.EmployeesItem_ListItem}>
          <label
            htmlFor={p.id}
            className={classes.EmployeesItem_ListItem_Label}
          >
            {`${p.lastName} ${p.firstName}`}
          </label>
          <input
            onChange={() => toggleElementHandler(p)}
            type='checkbox'
            id={p.id}
            checked={p.checked}
          />
        </li>
      )
    })
  }

  return (
    <>
      <div className={classes.EmployeesItem}>
        <h2 className={classes.EmployeesItem_Letter}>{letter}</h2>
        <ul>{personsList}</ul>
      </div>
    </>
  )
}

export default EmployeesItem
