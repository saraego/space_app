import styled from 'styled-components';
import Search from './search.png';
const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  /* border: 1px solid red; */
`;

const CampoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border: 2px solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  cursor: pointer;
`;

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoEstilizado {...props} />
      <IconeLupa src={Search} alt="icone" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
