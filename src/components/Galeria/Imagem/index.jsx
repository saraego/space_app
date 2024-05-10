import { styled } from 'styled-components';
import BotaoIcone from '../../BotaoIcone';

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? '90%' : '460px')};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0px 0px;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
  }
  h3,
  h4 {
    margin: 0;
    font-size: 16px;
  }
  h3 {
    font-family: 'GandhiSansBold';
  }
  h4 {
    flex-grow: 1;
  }
`;
const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({ fotos, expandida = false, aoAlternarFavorito, aoZoomSolicitado }) => {
  let iconeFavorito = '/icones/favorito.png';
  if (fotos.favorita) {
    iconeFavorito = '/icones/favorito-ativo.png';
  }

  return (
    <>
      <Figure $expandida={expandida} id={`foto-${fotos.id}`}>
        <img src={fotos.path} alt={fotos.titulo} />
        <figcaption>
          <h3>{fotos.titulo}</h3>
          <Rodape>
            <h4>{fotos.fonte}</h4>

            <BotaoIcone onClick={() => aoAlternarFavorito(fotos)}>
              <img src={iconeFavorito} alt="favorito" />
            </BotaoIcone>

            {!expandida && (
              <BotaoIcone onClick={() => aoZoomSolicitado(fotos)}>
                <img src="/icones/expandir.png" alt="expandir" />
              </BotaoIcone>
            )}
          </Rodape>
        </figcaption>
      </Figure>
    </>
  );
};

export default Imagem;
