import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList.js'
import ColorChanger from './ColorChanger.js'
import Profile from './Profile.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
      </header>
      <main>
        <section>
          <article>
            {/* Calls in the various components imported above and renders them out */}
            <div className="row">
              <div className="span1">
                <div className="bordered-text">
                  <Profile />
                </div>
                <div className="bordered-text">
                  <ColorChanger />
                </div>
              </div>
            </div>
          </article>
          <aside>
            <h1>Our Other Awesome Members</h1>
            <FriendsList />
          </aside>
        </section>
      </main>
    </div>

  );
}

/* Simply component that renders the header of the page with the logo and title of the website*/
class Logo extends Component {
  render() {
    return (
      <div>
        <img className="ess-logo" alt="essential insurance logo and name" src="EssentialInsuranceLogo.png" />
        <h2 className="ess-heading">Meet the Team</h2>
      </div>     
    );
  }
}

export default App;
