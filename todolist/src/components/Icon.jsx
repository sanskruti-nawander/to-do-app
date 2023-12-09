import React from 'react'

export default function Iconpass(props) {
  return (
    <button onClick={()=>props.Delete()}className="ls4" >{props.n}</button>
  )
}
