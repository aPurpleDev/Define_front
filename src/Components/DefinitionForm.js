import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap"
import _ from "lodash";
import useFetchResult from "../Hooks/DefinitionService";

export const DefinitionForm = () => {

  const [word, setWord] = useState('');
  const definition = useFetchResult(word);

  const wordInput = (event) => {

    event.preventDefault();
    setWord(event.target.value);
  }

    return <>
    <Container fluid>
      <Form>
      <h2 className="text-muted"><em>All the definitions you need</em></h2>
      <Form.Group className="col-md-4 offset-4" controlId="formWordToDefine">
        <Row>
        </Row>
        <Form.Control className="form-control" type="string" 
        placeholder="Seeking knowledge? Write a word here" onChange={wordInput} />
        <Button className="btn-lg top-buffer" variant="primary" type="submit" onClick={ (event) => event.preventDefault() }>
        Submit
       </Button>
      </Form.Group>
      </Form>
      <small className="text-muted">Looking for the meaning of <b>{word ? word : '.. nothing yet'}</b></small>
      <h2>{definition ? definition : null}</h2>
    </Container>
    </>
}