import React, { Component } from "react";
import "../styles/admin-page.css";

class AdminPage extends Component {
    constructor(){
        super();
        this.state = {
            formInput: {},
            title: '',
            description: '',
            tech: '',
            site_link: '',
            code_link: '',
            filters: '',
            imageFile: ''
        }
    }

    render() {
        console.log("state: ", this.state);
        return (
          <div id="admin_page" className="">
              <div className="container">
      
                  <form className="project-form" onSubmit={this.handleProjectFormSubmit}>
                      <div className="form-group">
                          <h1 className="text-white">Add a new project</h1>
                          <input type="text" className="form-control mb-1" id="project_title" placeholder="title" onChange={e => this.setState({ title: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_description" placeholder="description" onChange={e => this.setState({ description: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_tech" placeholder="technologies used" onChange={e => this.setState({ tech: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_site_link" placeholder="site url" onChange={e => this.setState({ site_link: e.target.value })} />
                          <input type="text" className="form-control mb-1" id="project_code_link" placeholder="code url (github, bitbucket, etc)" onChange={e => this.setState({ code_link: e.target.value })} />
                          <input type="text" className="form-control" id="project_filters" placeholder="filters (React, Meteor, etc)" onChange={e => this.setState({ filters: e.target.value })} />
                      </div>
                      <div className="form-group">
                          <label htmlFor="project_image" className="text-white">Upload Website Image: </label>
                          <input type="file" className="form-control-file mb-1 text-white" id="project_image" onChange={e => this.setState({ imageFile: e.target.files[0] })} />
                      </div>
                      <button type="submit" className="btn btn-success btn-lg submit-button">Submit</button>
                  </form>
      
              </div>
          </div>
        );
    }

    handleProjectFormSubmit = e => {
        e.preventDefault();
        
        this.setState({ formInput: {
            title: this.state.title,
            description: this.state.description,
            tech: this.state.tech,
            site_link: this.state.site_link,
            code_link: this.state.code_link,
            filters: this.state.filters
        }}, () => {
            let formData = new FormData();
            formData.append('formInput', JSON.stringify(this.state.formInput) );
            formData.append('image', this.state.imageFile);
    
            fetch('http://localhost:3000/projects', {
                method: 'post',
                mode: 'cors',
                body: formData,
            })
            .then(res => res.json())
            .then(response => console.log("success: ", JSON.stringify(response)))
            .catch(error => console.log("error: ", error))
        });
    }
};
export default AdminPage;
