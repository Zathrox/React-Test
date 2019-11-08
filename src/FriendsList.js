import React, { Component } from 'react';
import './FriendsList.css';

/* This class generates the random "friends/work colleagues" page from a different API
    while reading up and discovering how to use react to interact with API's I stumbled upon
    this API and a small tutorial on how to get and use the data for it, which I felt was 
    very fitting for the "friends list" requirement on the test  */
class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        };
    }

    componentDidMount() {
        /* Here, I had a small issue with the API refusing to send me data to a local machine, so I had
            to create a cors bypass to retrieve the data, thankfully loads of people on fullstack had 
            this issue and there were plenty of solutions, this was the one that worked for me  */
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const hexbot = 'http://randomuser.me/api/?results=6'
        /* Here I concatinate both strings above, while also retreiving 6 random results from the API 
            and fetch a request   */
        fetch(cors + hexbot, {mode: 'cors'})
        .then(results => {
            return results.json();
        }).then(data => {
            /* I then iterate over the data and store the results in the state but I render and return
                a predefined layout for data inside this little array function   */
            let friends = data.results.map((user) => {
                return(
                    <div key={user.name.first}>
                        <div id="friend-card">
                            <div id="col1">
                                <p>{user.name.first} {user.name.last}</p>
                            </div>
                            <div id="col2">
                                <img className="profile-pic" alt='' src={user.picture.medium} />
                            </div>                            
                        </div>
                    </div>
                )
            })
            /* I then set the state and log to console here */
            this.setState({pictures: friends});
            console.log("RandomUser sending you some peepz:", this.state);
        })
    }
    
    render() {
        return (
            /* Simply renders out the state, which will show and use all the data provided in the array   */
            <div>
                {this.state.pictures}
            </div>     
        );
    }
}

export default FriendsList;

