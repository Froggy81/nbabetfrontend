import React from 'react'

export const Bets = ({bets}) => {

    const BetRow = (bet,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{bet.betid}</td>
                  <td>{bet.amount}</td>
                  <td>{bet.team}</td>
                  <td>{bet.games}</td>
                  <td>{bet.overunder}</td>
                  <td>{bet.towin}</td>
                  <td><img alt="" src={bet.next}i width="30" height="45"></img></td>
                  <td>{bet.hora}</td>
                  <td>{bet.odds}</td>
              </tr>
          )
    }

    const betTable = bets.map((bet,index) => BetRow(bet,index))

    return(
        <div className="container">
            <table className="table table-striped table-bordered" id="sortTabe">
                <thead>
                <tr>
                    <th>Bet Id</th>
                    <th>Payout</th>
                    <th>Team</th>
                    <th>Games</th>
                    <th>Over/Under</th>
                    <th>To Win</th>                    
                    <th>Next Opp</th>
                    <th>Home/Away</th>
                    <th>Odds</th>
                </tr>
                </thead>
                <tbody>
                    {betTable}
                </tbody>
            </table>
        </div>
    )
}
