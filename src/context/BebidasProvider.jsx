/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState(null);
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    obtenerReceta();
  }, [bebidaId]);

  const obtenerReceta = async () => {
    if (!bebidaId) return;

    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
      const { data } = await axios(url);

      console.log('data', { data });

      setReceta(data.drinks[0]);
    } catch (error) {
      console.log({ error });
    }
  };

  const consultarBebida = async ({ nombre, categoria }) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const { data } = await axios(url);

      setBebidas(data.drinks);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleModalClick = () => {
    if (modal) setReceta(null);
    setModal(!modal);
  };

  const handleBebidaIdClick = (id) => {
    setBebidaId(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        modal,
        bebidaId,
        receta,
        consultarBebida,
        handleModalClick,
        handleBebidaIdClick,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
