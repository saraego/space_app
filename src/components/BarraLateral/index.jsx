import styled from 'styled-components';
import ItemNavegacao from './ItemNavegacao';
import navegacao from './navegacao.json';
const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 236px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          {navegacao.map((nav) => (
            <ItemNavegacao
              key={nav.id}
              texto={nav.texto}
              iconeAtivo={nav.iconeAtivo}
              iconeInativo={nav.iconeInativo}
              id={nav.id}
            />
          ))}
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
