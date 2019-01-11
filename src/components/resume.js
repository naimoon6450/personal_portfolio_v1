import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center'}}>
                            <img src={require("../myAvatar.png")} 
                            style={{height: '200px'}}
                            alt="myAvatar" 
                            className="avatar-img"
                            />
                            
                        </div>
                        <h2>Sami Sira</h2>
                        <h4 style={{color: '2em'}}>Future Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hackerway Menlo Park</p>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    
                    
                        <Education 
                            startYear={2011}
                            endYear={2015}
                            schoolName="Columbia University"
                            schoolDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        />
                        
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={20}
                        />
                        <Skills
                            skill="Python"
                            progress={50}
                        />
                        <Skills
                            skill="SQL"
                            progress={50}
                        />
                    </Cell>
                </Grid>
                
            </div>
            
        )
    };
};

export default Resume;