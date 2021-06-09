import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class MainPage extends Component{
  
    render(){
        return(
        <Container fluid>

            <Row>
                <Header/>
            </Row>
            <Row>
               <Col>
                   kjlahjfdsjfkjldfs
               </Col>
            </Row>
            <Row>
            <Footer></Footer>
            </Row>

        </Container>);
    }
}
export default MainPage;


