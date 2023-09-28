import React from 'react'
import MyInputComponent from '../../components/myInput'
import MyCardComponent from '../../components/myCard'
import MyStyledButton from '../../components/myBtn'

export default function index() {
  return (
    <div style={{width:'200px', padding:"20px"} }>
      <MyInputComponent/>

        <MyCardComponent>
            salom dostlar
            <MyStyledButton type={"adaptive"} width={"300px"}>
                <div>
                Click to me !!!
                </div>
            </MyStyledButton>
        </MyCardComponent>

    </div>
  )
}
