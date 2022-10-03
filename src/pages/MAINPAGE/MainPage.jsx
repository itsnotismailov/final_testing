import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from "../../Firebase";

const MainPage = () => {
  return (
    <div>
        <button onClick={() => signOut(auth)}>ВЫЙТИ</button>
    </div>
  )
}

export default MainPage