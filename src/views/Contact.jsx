import { Button, Form } from "react-bootstrap";

const ContactComponent = () => {
  return (
    <>
      <h2 className="mt-4 text-center fw-bold">
        Cuéntanos, ¿en qué te podemos ayudar?
      </h2>
      <Form className="mx-5 mt-3">
        <Form.Group
          className="mb-3 text-center fs-5 fw-bold"
          controlId="formBasicEmail"
        >
          <Form.Label>📧 Correo:</Form.Label>
          <Form.Control type="email" placeholder="ingresa tu correo" />
        </Form.Group>

        <Form.Group className="text-center fs-5 fw-bold">
          <Form.Label>📄 Descripción:</Form.Label>
          <Form.Control
            placeholder="agrega una descripción"
            as="textarea"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Form.Group className="text-center">
          <Button className="mt-3 fw-bold" bg="danger" variant="danger">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default ContactComponent;
