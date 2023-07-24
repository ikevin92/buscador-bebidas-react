import { Row } from 'react-bootstrap';
import useBebidas from '../hooks/useBebidas';
import Bebida from './Bebida';

const ListadoBebidas = () => {
  const { bebidas } = useBebidas();

  if (!bebidas) return null;

  return (
    <Row className="mt-5">
      {bebidas.map((bebida) => (
        <Bebida
          key={bebida.idDrink}
          bebida={bebida}
        />
      ))}
    </Row>
  );
};
export default ListadoBebidas;
