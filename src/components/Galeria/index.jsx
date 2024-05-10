import styled from 'styled-components';
import Titulo from '../Titulo';
import Imagem from './Imagem';
import Populares from './Populares';
import Tags from './Tags';

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoAlternarFavorito, aoZoomSolicitado, filterSpace }) => {
  return (
    <>
      <Tags filterSpace={filterSpace}/>
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo $alinhamento={''}>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem
                key={foto.id}
                fotos={foto}
                aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={aoZoomSolicitado}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>

        <Populares fotos={fotos} />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
