import React, {Component} from 'react';
import Leaderboard from '../components/Leaderboard/Leaderboard.js';

class LeaderboardContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            filter: '30 Days'
        };
    }

    componentDidMount() {
        // get leaderboard data one time when component mounts
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(data => data.json())
        .then(data => {
            this.setState({
                data: data.slice(0, 10),
                filter: '30 Days'
            });
        });
    }

    onFilterClick = (event) => {
        // If current filter matches filter user clicks on, change nothing
        var filter = event.target.dataset.filter;
        if(this.state.filter === filter) return false;

        // else, begin changing the state...
        var newState = {
            data: this.state.data.slice(),
            filter: filter
        };

        // sort data by filter and then set state.date to be sorted data
        newState.data.sort((userA, userB) => {
            var key = (filter === '30 Days') ? 'recent' : 'alltime';
            return userB[key] - userA[key];
        });

        this.setState(newState);
    };

    render() {
        console.log(this.state.data);
        return (
            <div className='leaderboard-container'>
                <Leaderboard data={this.state.data} filter={this.state.filter} onFilterClick={this.onFilterClick} />
            </div>
        );
    };

};

export default LeaderboardContainer;
