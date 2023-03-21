import React from 'react' 
export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Texto/>
      <Cabecalho/>
    </div>
  )
} 

export function Cabecalho(){
  return(
    <div
      style={{
        backgroundColor:'black',
        height:'20vh'
      }}
      >
    </div>
  )
} 

export function Texto(){
  return(
    <div style={{
      paddingBottom:'20vh',
      paddingTop:'20vh'
    }}>
      <h1>Scaralho</h1>
    </div>
  )
} 