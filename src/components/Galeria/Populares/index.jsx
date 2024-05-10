import styled from 'styled-components';
import Titulo from '../../Titulo';

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Populares = ({ fotos }) => {
  return (
    <section>
      <Titulo $alinhamento="right">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
        ))}
      </ColunaFotos>
    </section>
  );
};

export default Populares;
