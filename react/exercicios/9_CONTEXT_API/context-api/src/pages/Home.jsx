// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

//4- refatorando hook
import useCounterContext from "../hooks/useCounterContext"

import ChangeCounter from "../components/ChangeCounter"

const Home = () => {
  const {counter} = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>O valor do context é:{counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default Home