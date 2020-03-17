import React, { Component } from "react";
import NavBar from "../components/navbar";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Footer from "../components/footer";
import "../styles/home.css";

class Home extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      originalProjects: [],
      animateFooter: false
    };

    this.projRef = React.createRef();
    this.footerRef = React.createRef();
  }

  componentDidMount() {
    this.fetchProjectsInDB();
    window.addEventListener('scroll', this.handleFooterAnimation);
  }
  
  render() {
    return (
      <div id="home">
        <NavBar />
        <Intro projRef={this.projRef} onViewWorkClick={this.handleViewWorkScroll} />
        <Projects projects={this.state.projects} projRef={this.projRef} />
        <Footer footerRef={this.footerRef} animateFooter={this.state.animateFooter} />
      </div>
    );
  }

  fetchProjectsInDB = () => {
    fetch(process.env.REACT_APP_PROJECT_URL).then(result => result.json()).then(data => {
      this.setState({ projects: data, originalProjects: data });
    })
  }

  handleViewWorkScroll = () => {
    let top = this.projRef.current.offsetTop;
    let left = this.projRef.current.offsetLeft;
    window.scroll({top: top, left: left, behavior: 'smooth'});
  }

  handleFooterAnimation = () => {
    let bottomOfPage = window.scrollY + window.innerHeight;
    let topOfFooter = this.footerRef.current.offsetTop;
    if(bottomOfPage > topOfFooter && this.state.animateFooter === false){
      this.setState({ animateFooter: true })
    }
  }

}

export default Home;