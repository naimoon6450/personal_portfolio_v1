import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    // This will be a class initialized with a STATE, so needs a constructor
    constructor(props){
        super(props);
        this.state = { activeTab: 0 }
    };
    
    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                
                <div className="projects-grid">
                    {/* Card for project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.gfxmag.com/wp-content/uploads/2016/07/javascript-vector-logo-1.png) center / cover'}}>
                        JavaScript Projects</CardTitle>
                        
                        <CardText>When setState is called, BlinkApp will re-render its Component. By calling setState within the Timer, the component will re-render every time the Timer ticks.</CardText>
                        
                        <CardActions>
                            <Button colored>GitHub</Button>
    
                        </CardActions>
                        
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/* Card for project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.gfxmag.com/wp-content/uploads/2016/07/javascript-vector-logo-1.png) center / cover'}}>
                        JavaScript Projects</CardTitle>
                        
                        <CardText>When setState is called, BlinkApp will re-render its Component. By calling setState within the Timer, the component will re-render every time the Timer ticks.</CardText>
                        
                        <CardActions>
                            <Button colored>GitHub</Button>
    
                        </CardActions>
                        
                        <CardMenu style={{ color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>

            )
        }
        
        else if(this.state.activeTab === 1){
            return (
                
                <div><h1>These are my Python projects</h1></div>    

            )
        }
    }
        

    
    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID})} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>Python</Tab>
                </Tabs>
            
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            
            </div>
            
        )
    };
};

export default Projects;