import React, { useState } from 'react'
import styles from './employees.module.css'
import CardComponent from '../../components/cardComponent'
import EmployeesHeader from '../../views/empoyees/employeeHeader/employeesHeader'
import EmployeeTable from '../../views/empoyees/employeesTable/employeeTable'

export default function Employees() {

  const [addEmp, setAddEmp] = useState(false);

  return (
    <div className={styles.employee}>
        <CardComponent>
            <EmployeesHeader setAddEmp={setAddEmp} />
            <EmployeeTable addEmp={addEmp} setAddEmp={setAddEmp} />
        </CardComponent>
    </div>
  )
}
