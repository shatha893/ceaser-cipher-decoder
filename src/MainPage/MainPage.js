import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import classes from './MainPage.module.css';
import Axios from 'axios';
import Person1 from '../Assets/character-3.svg';
import Person2 from '../Assets/character-22.svg';

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
            let tempArr= []
            // eslint-disable-next-line
            res.data.answers.map(sentence =>{
                tempArr.push(sentence);
            });
            this.setState({plainText:[...tempArr]});
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
            <img src={Person1} className={classes.person1}/>
            
            <div className={classes.cipherText}>
                <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text className={classes.textTitle}>Enter Cipher Text</InputGroup.Text>
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
                <table className={classes.output}>
                    {this.state.plainText.map((sentence,i)=>( 
                        <tr>
                            <th>{i}</th> 
                            <td> {sentence} </td>
                        </tr>))}
                </table>
            </div>
            <img src={Person2} className={classes.person2}/>
        </Row>
        <Row>
            <Footer></Footer>
        </Row>
        </Container>);
    }
}
export default MainPage;


