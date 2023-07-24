/* eslint-disable react/prop-types */
import { Button, Card, Col } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();

  if (!bebida) return null;

  const { strDrinkThumb, strDrink, idDrink } = bebida ?? {};

  return (
    <Col
      md={6}
      lg={3}
    >
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />

        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            className="w-100 text-uppercase mt-2"
            variant="warning"
            onClick={() => {
              handleBebidaIdClick(idDrink);
              handleModalClick();
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Bebida;
