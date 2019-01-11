import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import Main from './components/main';

class App extends Component {
  render() {
    return (
      /* Uses a transparent header that draws on top of the layout's background */
      // <div style={{height: '300px', position: 'relative'}}>
      //   <Layout fixedHeader>
      //     <Header title={<span style={{ color: 'black' }}><strong>My Portfolio</strong></span>}>
      //         <Navigation>
      //             <a href="/">Link</a>
      //             <a href="/">Link</a>
      //             <a href="/">Link</a>
      //             <a href="/">Link</a>
      //         </Navigation>
      //     </Header>
      //     <Drawer title="Title">
      //         <Navigation>
      //             <a href="/">Link</a>
      //             <a href="/">Link</a>
      //             <a href="/">Link</a>
      //             <a href="/">Link</a>
      //         </Navigation>
      //     </Drawer>
      //     <Content />
      //   </Layout>
      // </div>
      <div className="demo-big-content">
        <Layout fixedHeader>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to='/' />} scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content> 
              <div className="page-content"></div>
              <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
