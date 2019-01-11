import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sami Sira</h2>
                        <img src={require("../myAvatar.png")} 
                        alt="myAvatar" 
                        style={{height: '200px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto'}}>Lorem ipsum etc.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Thasadith'}}> 
                                        <i className="fas fa-mobile-alt">    (123)-456-1234</i>
                                    </ListItemContent>
                                 </ListItem>
                                 <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Thasadith'}}> 
                                        <i className="fab fa-skype">    (123)-456-1234</i>
                                    </ListItemContent>
                                 </ListItem>
                                 <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Thasadith'}}> 
                                        <i className="fas fa-fax">    (123)-456-1234</i>
                                    </ListItemContent>
                                 </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
            
        )
    };
};

export default Contact;