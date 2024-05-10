import { useState } from 'react';
import styled from 'styled-components';

const ItemListaEstilizada = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? '#7B78E5' : '#808080')};
  font-family: ${(props) => (props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular')};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const ItemNavegacao = ({ texto, iconeAtivo, iconeInativo, id }) => {
  const [ativo, setAtivo] = useState(false);

  return (
    <ItemListaEstilizada $ativo={ativo} onClick={() => setAtivo(!ativo)}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="Icone de navegação" />
      {texto}
    </ItemListaEstilizada>
  );
};

export default ItemNavegacao;
