import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap"
import { fetchDefinition } from "../Services/DefinitionService";

export const DefinitionForm = () => {

  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const wordInput = (event) => {
    setWord(event.target.value);
  }

  useEffect( ()=> {
    const fetchResult = async()=>{
      let result = await fetch(`http://localhost:3000/define/${word}`);
      let JsonResult = await result.json(); 
      JsonResult = JSON.stringify(JsonResult).replace(/[\[\]']+/g, '');
      setDefinition(JsonResult);
    };
    fetchResult();
  }, [word]);

    return <>
    <Container fluid>
      <Form>
      <h2 className="text-muted"><em>All the definitions you need</em></h2>
      <Form.Group className="col-md-4 offset-4" controlId="formWordToDefine">
        <Row>
        </Row>
        <Form.Control className="form-control" type="string" 
        placeholder="Seeking knowledge? Write a word here" onChange={wordInput} />
        <Button className="btn-lg top-buffer" variant="primary" type="submit">
        Submit
       </Button>
      </Form.Group>
      </Form>
      <small className="text-muted">Looking for the meaning of <b>{word ? word : '.. nothing yet'}</b></small>
      <h2>{definition ? definition : null}</h2>
    </Container>
    </>
}