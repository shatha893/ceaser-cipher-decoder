import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './MainPage.module.css';
import Axios from 'axios';

class MainPage extends Component{
  
    state = {
        cipherText:"",
        plainText:[]
    }

    handleTextChange = (event) =>{
        this.setState({cipherText:event.target.value});
    }

    handleDecodeClick = () =>{
        Axios.post("/decode",{
            "text":this.state.cipherText
        })
        .then(res =>{
            console.log(res);
            this.setState({plainText:res.data.answers})
        })
        .catch(error=>{
            console.log("Error in decode request ",error)
        })
    }

    render(){
        return(
        <Container fluid={+true}>
        <Row>
            <Header/>
        </Row>
        <Row className={classes.content}>
            <div className={classes.cipherText}>
                <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text className={classes.textTitle}>Cipher Text</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                as="textarea" 
                aria-label="With textarea"
                className={classes.textarea}
                onChange={(event)=>this.handleTextChange(event)}/>
                </InputGroup>
                <button 
                className={classes.decodeBtn}
                onClick={this.handleDecodeClick}>
                DECODE
                </button>
                <p>{this.state.plainText}</p>
            </div>
        </Row>
        <Row>
            <Footer></Footer>
        </Row>
        </Container>);
    }
}
export default MainPage;


