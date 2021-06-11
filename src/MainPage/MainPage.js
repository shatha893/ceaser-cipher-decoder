import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import classes from './MainPage.module.css';
import Axios from 'axios';
import Person1 from '../Assets/character-3.svg';
import Person2 from '../Assets/character-22.svg';
import DropdownList from '../DropdownList/DropdownList';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

class MainPage extends Component{
  
    state = {
        cipherText:"",
        decodedText:[],
        plainText:"",
        encodedText:"",
        chosenShift:0
    }

    handleCipherTextChange = (event) =>{
        this.setState({cipherText:event.target.value});
    }

    handlePlainTextChange = (event) =>{
        this.setState({plainText:event.target.value});
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
            this.setState({decodedText:[...tempArr]});
        })
        .catch(error=>{
            console.log("Error in decode request ",error)
        })
    }

    handleEncodeClick = () =>{
        Axios.post("/encode",{
            "text":this.state.plainText,
            "shift":this.state.chosenShift
        })
        .then(res =>{
            console.log(res);
            this.setState({encodedText:res.data.answer});
        })
        .catch(error=>{
            console.log("Error in encode request ",error)
        })
    }

    handleShiftClick = (shiftNo)=>{
        this.setState({chosenShift:shiftNo});
    }

    render(){
        let shifts= [];
        for(let i=1;i<27;i++)
            shifts.push(i);

        return(
        <Container fluid={+true}>
        <Row>
            <Header/>
        </Row>
        <Row  className={classes.content}>
            <Col> <img src={Person1} className={classes.person1}/></Col>
            <Col md={6}>
            
            <div className={classes.cipherText}>
                    <InputGroup className={classes.input}>
                    <InputGroup.Prepend>
                        <Button 
                        variant="outline-secondary"
                        className={classes.decodeBtn}
                        onClick={this.handleEncodeClick}>ENCODE</Button>
                    </InputGroup.Prepend>
                    <Form.Control 
                    as="textarea" 
                    aria-label="With textarea"
                    placeholder={"Enter Plain Text"}
                    className={classes.textarea}
                    onChange={(event)=>this.handlePlainTextChange(event)}/>
                    </InputGroup>
                    <DropdownList
                    text={this.state.chosenShift !== 0?this.state.chosenShift:"Choose Desired Shift"}
                    dark
                    className={classes.dropdown}>
                    {shifts.map((shift,index)=>{
                    return(
                    <Dropdown.Item
                    key={index}
                    onClick={()=>this.handleShiftClick(shift)}>{shift}</Dropdown.Item>
                    );
                    })}
                    </DropdownList>
                    <table className={this.state.encodedText===""?classes.outputHide:classes.output}>
                        <tr>
                            <th>-</th> 
                            <td> {this.state.encodedText} </td>
                        </tr>
                    </table>
                    </div>

                    <div className={classes.cipherText}>
                    <InputGroup className={classes.input}>
                    <InputGroup.Prepend>
                    <Button 
                    className={classes.decodeBtn}
                    onClick={this.handleDecodeClick}>DECODE</Button>
                    </InputGroup.Prepend>
                    <Form.Control 
                    as="textarea" 
                    aria-label="With textarea"
                    placeholder={"Enter Cipher Text"}
                    className={classes.textarea}
                    onChange={(event)=>this.handleCipherTextChange(event)}/>
                    </InputGroup>
                    <table className={classes.output}>
                        {this.state.decodedText.map((sentence,i)=>( 
                            <tr>
                                <th> {i+1} </th> 
                                <td> {sentence} </td>
                            </tr>))}
                    </table>
                </div>
                </Col>
                <Col>
                <img src={Person2} className={classes.person2}/>
            </Col>
        </Row>
     
        <Row>
            <Footer></Footer>
        </Row>
        </Container>);
    }
}
export default MainPage;


