import { Container, Navbar } from "react-bootstrap"

export const DefinitionNavBar = () => {
    return <>
    <Container fluid>
      <Navbar.Brand >
        <img
          alt=""
          src={require('../Assets/logo.png')}
          width="auto"
          height="auto"
          className="d-inline-block align-center"
        />{' '}
      </Navbar.Brand>
      <h1 className = "custom-title">DefineWithOxford</h1>
    </Container>
    </>
}