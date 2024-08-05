import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"

// useContext
import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"


const Home = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>UseContext</h2>
        <p>Valor do  context: {contextValue}</p>
        <HookUseRef />
    </div>
  )
}

export default Home