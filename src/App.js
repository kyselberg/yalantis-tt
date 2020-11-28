import React, {useEffect, useState} from 'react'
import {getTheList} from './assets/js/helpers'
import Employees from './components/Employees/Employees'
import Birthdays from './components/Birthdays/Birthdays'
import classes from './App.module.css'

const App = () => {
  const localStorageList =
    JSON.parse(localStorage.getItem('birthdayList')) || []
  const [mainList, updateMainList] = useState([])
  const [birthdayList, updateBirthdayList] = useState(localStorageList)

  useEffect(() => {
    getTheList().then(res => {
      res = res.map(person => {
        if (birthdayList.some(el => el.id === person.id)) {
          return {...person, checked: true}
        }
        return person
      })
      updateMainList(res)
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('birthdayList', JSON.stringify(birthdayList))
  }, [birthdayList])

  return (
    <div className={classes.App}>
      <div className={classes.Employees}>
        <Employees
          onChange={updateBirthdayList}
          list={mainList}
          bList={birthdayList}
        />
      </div>
      <div className={classes.Birthdays}>
        <Birthdays birthdayList={birthdayList} />
      </div>
    </div>
  )
}

export default App
