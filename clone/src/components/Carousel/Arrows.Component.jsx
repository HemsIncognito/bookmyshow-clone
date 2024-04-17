import React from 'react'

export function Next(props) {
  return (
    <>
      <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>
    </>
  )
}

export function Prev(props) {
  return (
    <>
      <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>
    </>
  )
}
