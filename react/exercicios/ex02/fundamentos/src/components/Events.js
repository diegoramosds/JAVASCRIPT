const Events = () => {

   const handleMyevents = (event) =>{
    console.log('Evento ativado!')
   }

    return (
        <div>
           <div>
            <button onClick={handleMyevents}>Clique</button>
           </div>
          
        </div>
    )
}

export default Events