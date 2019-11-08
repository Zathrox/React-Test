import React from 'react'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        /* Here I set the state for all the various details as part of the profile */
        this.state = {
            profilepic: "luke-profile.jpg",
            firstname: "Luke",
            lastname: "Driscoll",
            dob: "10-05-1990",
            bio: "Hello, I'm Luke and I'm a web-developer for Essential Insurance, my main job is developing new features for the website, aswell as maintaining it so it's always working perfectly for your needs when seeking information on this very important subject of Life Insurance",
            hobby: "As you can probably guess from my profile picture, I absolutely love travelling! exploring the world is incredibly exciting! I also love programming because I can build and create interesting products other people can use and enjoy!",
            input: "",
            selectedOption: "bio",
        };
        /* Just above you can see two special values, these are used to store and save the various states from the input  */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    /* This takes the input from the textfield and updates/stores it in the input state field */
    handleChange(event) {
        this.setState({input: event.target.value});
    }

    /* Similar to above, however, this takes and stores the radio button option selected by the user */
    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
        console.log("new radio state:", event.target.value);
    }
    
    /* This function is called when the user presses submit on the edit profile details section
        it preforms several checks, such as checking if the text field is empty or not and produces
        an alert to inform the user, it also checks which radio button is selected through the state
        options and changes the corresponding state/field and then produces an alert and logs  */
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption === "bio") {
            if(this.state.input !== "") {
                alert('A new introduction was submitted: ' + this.state.input);
                this.setState({
                    input: "",
                    bio: this.state.input
                });
                console.log("new state update for Introduction:", this.state.input);
            } else {
                alert('textfield is empty - please type something');
            }
        } else if (this.state.selectedOption === "hobby") {
            if(this.state.input !== "") {
                alert('A new interests description was submitted: ' + this.state.input);
                this.setState({
                    input: "",
                    hobby: this.state.input
                });
                console.log("new state update for Interests:", this.state.input);
            } else {
                alert('textfield is empty - please type something');
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    {/* This is a very simple setup of web elements that use multiply bits of data from the state */}
                    <img style={{height: "150px", borderRadius: "40%"}} 
                        alt="an essential insurance team member" 
                        src={this.state.profilepic} 
                    />
                    <p>{this.state.firstname} {this.state.lastname}</p>
                    <p>{this.state.dob}</p>
                    <h1>Introduction:</h1>
                    <p style={{width: "300px"}}>
                        {this.state.bio}
                    </p>                
                    <h1>Interests:</h1>
                    <p style={{width: "300px"}}>
                        {this.state.hobby}
                    </p>
                </div>
                <div className="bordered-text">
                    <p>Edit Profile Details:</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>                     
                            <input value={this.state.input} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                        <div className="radio">
                        <label>
                            <input type="radio" value="bio" 
                                        checked={this.state.selectedOption === 'bio'} 
                                        onChange={this.handleOptionChange} />
                            Introduction
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="hobby" 
                                        checked={this.state.selectedOption === 'hobby'} 
                                        onChange={this.handleOptionChange} />
                            Interests
                        </label>
                        </div>
                    
                    </form>
                </div>
            </div>

        );
    }
}

export default Profile;