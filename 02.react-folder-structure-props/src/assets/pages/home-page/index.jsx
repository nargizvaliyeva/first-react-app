import React from 'react'
import Table from '../../components/table'
import "./index.scss"

function Homepage({users}) {
  return (
   <Table users={users}/>
  )
}

export default Homepage
