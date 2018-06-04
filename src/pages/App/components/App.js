import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg,Label} from 'reactstrap';
import SearchForm from './SearchForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchImage = this.fetchImage.bind(this);
    this.props.fetchImage("whitetiger713");
  }

  fetchImage({ keyword }) {  
    this.props.fetchImage(keyword);
  }

  render(){
  
    const { loading, userdata, repos} = this.props;

    return (
      <div className="App">
        <Container className="text-center">
          <Row>
            <Col>
              <h1 >Github API_Redux-thunk</h1>
            </Col>
          </Row>
          <Row >
            <Col>
              <SearchForm onSubmit={this.fetchImage}/>
            </Col>
          </Row>
          { loading && <div><img src="./loading.gif" alt="Avatar"/></div> }
          { !loading && userdata && 
            userdata.map((url, index) => {
              return(
                <Row key={index} ><Col xs="12" sm="6" lg="3" md={{ size: 4, offset: 2 }}>
                  <Card>
                    <CardImg src={ url.avatar_url } />
                  </Card>
                  </Col >
                  <Col className="text-left font-25" md="4" >
                    <Label>UserName</Label><br/>
                    &nbsp;<a href={ url.html_url }><Label>{ url.login }</Label></a><br/>
                    <Label>Repository</Label><br/>
                    {
                      repos.map((repo_url,i) => {
                        console.log(repo_url);
                        return(
                          <a key={i} href={repo_url.html_url}>
                            <li className="font-18">{ repo_url.name }</li>
                          </a>
                        );
                      })
                    }
                  </Col>
                </Row>
              );
            })}
        </Container>
      </div>
    );
  }
}

export default App;