import { useState } from 'react'

function votacao() {

    const[VoteA, setVoteA] = useState (0)
    const[VoteB, setVoteB] = useState (0)
    const[VoteC, setVoteC] = useState (0)


    return (

    <>
        <div className='card'>
         
         <h2>Votação</h2>
         
            <p>Vote em uma das Tres opçoes</p>
         
                <button className='A' onClick={() => setVoteA(VoteA + 1)}>A</button>
               
                <button className='B' onClick={() => setVoteB(VoteB + 1)}>B</button>
               
                <button className='C' onClick={() => setVoteC(VoteC + 1)}>C</button>
                

                <p>Total Votos</p>
                <p>A = {VoteA}</p>
                <p>B = {VoteB}</p>     
                <p>C = {VoteC}</p>   
        </div>
    </>
    )
}
export default votacao