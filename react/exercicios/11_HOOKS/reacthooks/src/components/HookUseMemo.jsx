import {useState, useEffect, useMemo} from 'react';

const HookUseMemo = () => {
  const [number, setNumber] = useState(0)

  const premiumNumbers  = useMemo(() => {
   return ["0", "100", "200"];
  }, [])

  useEffect(() =>  {
    console.log("Premium foi alterado")
  }, [premiumNumbers])

  return (
    <div>
      <h2>UseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} />
      {premiumNumbers.includes(number) ?  <p>Acertou o número</p> : ""}
      <hr />
    </div>
  )
}

export default HookUseMemo