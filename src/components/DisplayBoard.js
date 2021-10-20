import React from 'react'

export const DisplayBoard = ({getAllBets}) => {


    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={headerStyle} className="display-board">
            <h4 style={{color: 'white'}}>Get Bets</h4>
            <div className="btn">
                <button type="button" onClick={(e) => getAllBets()} className="btn btn-warning">Get Bet</button>
            </div>
        </div>
    )
}
