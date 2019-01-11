import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require("../myAvatar.png")} 
                        alt="myAvatar" 
                        className="avatar-img"
                        />
                        
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p> HTML/CSS | Bootstrap | JavaScript | React | Express | MongoDB </p>
                            
                            
                            <div className="social-links">
                            
                            {/* LinkedIn */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                            
                            {/* GitHub */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-alt" aria-hidden="true"></i>
                                </a>    
                            
                            {/* FCC */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-free-code-camp" aria-hidden="true"></i>
                                </a>        
                            
                            {/* YouTube */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                </a>       
                                
                            </div>
                        </div>
                        
                        
                        
                        
                    
                    </Cell>
                    
                </Grid>
            </div>
            
        )
    };
};

export default LandingPage;