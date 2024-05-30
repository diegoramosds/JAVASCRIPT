// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import useCounterContext from "../hooks/useCounterContext"

const About = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>About</h1>
      <p>O valor do context é: {counter}</p>
    </div>
  )
}

export default About