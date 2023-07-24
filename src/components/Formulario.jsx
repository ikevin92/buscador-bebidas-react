import { Col, Form, Row, Button, Alert } from 'react-bootstrap';
import useCategorias from '../hooks/useCategorias';
import { useState } from 'react';
import useBebidas from '../hooks/useBebidas';

const Formulario = () => {
  const { categorias } = useCategorias();
  const { consultarBebida } = useBebidas();

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: '',
  });

  const [alerta, setAlerta] = useState('');

  const handleBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios');
      return;
    }

    setAlerta('');

    consultarBebida(busqueda);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert
          variant="danger"
          className="text-center"
        >
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              name="nombre"
              value={busqueda.nombre}
              type="text"
              placeholder="Ej: Tequila, Vodka, etc..."
              onChange={handleBusqueda}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoría Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={handleBusqueda}
            >
              <option> -- Selecciona Categoría -- </option>
              {categorias &&
                categorias.map((categoria) => (
                  <option
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            type="submit"
            variant="danger"
            className="text-uppercase w-100"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default Formulario;
