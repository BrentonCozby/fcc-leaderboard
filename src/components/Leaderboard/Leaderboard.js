import React from 'react';
import './Leaderboard.css';

const Leaderboard = (props) => {

    var data;
    if(props.data) {
        data = props.data.map((user, index) => {
            return (
                <tr key={user.username} className='user-row'>
                    <td>{index + 1}</td>
                    <td className='username'><img alt={user.username} src={user.img}/><p>{user.username}</p></td>
                    <td>{user.recent}</td>
                    <td>{user.alltime}</td>
                </tr>
            );
        });
    }

    return (
        <table className='leaderboard'>
            <thead className='leaderboard-head'>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th data-filter='30 Days'
                        className={(props.filter === '30 Days') ? 'filter active' : 'filter'}
                        onClick={props.onFilterClick}>Points in Past 30 Days</th>
                    <th data-filter='All Time'
                        className={(props.filter === 'All Time') ? 'filter active' : 'filter'}
                        onClick={props.onFilterClick}>All Time Points</th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
    );
};

export default Leaderboard;
