import { Count } from "../components/Count"
import { useState, useEffect } from 'react';
import Link from "next/link";

export async function getServerSideProps(context) {
  console.log('process.env.NEXT_PUBLIC_API_URL',process.env.NEXT_PUBLIC_API_URL+'api/count')
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'api/count');
  const result = await resp.json();

  return {
    props: {value:result.value}, // will be passed to the page component as props
  }
}
function CounterDummy({value, onChangeValue}){

  return <>
  {value}
  <input type="button" value="+" onClick={()=>{
    onChangeValue(value+1);
  }} />
  </>
}
export default function Home(props) {
  console.log('Home method',props)
  const [count, setCount] = useState(props.value);

  // useEffect(()=>{
  //   // fetch('/api/count')
  //   // .then(response=>response.json())
  //   // .then(result=>setCount(result.value))
  // }, []);

  return (
    <>
      <Count></Count>
      <CounterDummy value={count} onChangeValue={(oldValue)=>{
        const options = {
          method : 'PATCH',
          headers : {'Content-Type' :'application/json'},
          body: JSON.stringify({value:oldValue})      
      }
      fetch(process.env.NEXT_PUBLIC_API_URL+'/api/count',options)
          .then(response=>response.json())
          .then(result=>{
            setCount(result.value)
          })
      }}></CounterDummy>
    </>
  )
}
