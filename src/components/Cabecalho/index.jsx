import styled from 'styled-components';
import CampoTexto from '../CampoTexto';

const HeaderEstilizado = styled.header`
  padding: 60px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo" />
      <CampoTexto placeholder="Pesquisar" type="text" />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
