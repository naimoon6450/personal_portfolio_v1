import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            
            
            <Grid>
                <Cell col={12}>
                    {this.props.skill}
                    <div style={{display: 'inline'}}>
                        <ProgressBar style={{marginTop: '10px', width: '75%'}} progress={this.props.progress} />
                    </div>
                </Cell>
                
            </Grid>
            
            
        
        )
    }
    
}

export default Skills;