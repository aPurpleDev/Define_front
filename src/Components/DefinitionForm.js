import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap"

export const DefinitionForm = () => {

  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const wordInput = (event) => {
    setWord(event.target.value);
  }

  useEffect( ()=> {
    const fetchResult = async()=>{
      console.log('here');
      let result = await fetch(`http://localhost:3000/define/${word}`);
      let JsonResult = await result.json(); 
      console.log(JsonResult);
      setDefinition(JSON.stringify(JsonResult));
    };
    fetchResult();
  }, [word]);

    return <>
    <Container fluid>
      <Form>
      <Form.Group className="col-md-12" controlId="formWordToDefine">
        <Row>
        <Form.Label className="h2">Enter a word to define</Form.Label>
        </Row>
        <Form.Control type="string" placeholder="Seeking knowledge? write here" onChange={wordInput} />
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
      </Form>
      <h2 className="custom-title">Looking for {word ? word : '.. nothing yet'}</h2>
      <h2 className="custom-title">{definition ? definition : null}</h2>
    </Container>
    </>
}