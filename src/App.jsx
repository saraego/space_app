import { useState } from 'react';
import styled from 'styled-components';
import bannerBackground from './assets/banner.png';
import Banner from './components/Banner';
import BarraLateral from './components/BarraLateral';
import Cabecalho from './components/Cabecalho';
import { EstilosGlobais } from './components/EstilosGlobais';
import Galeria from './components/Galeria';
import ModalZoom from './components/ModalZoom';
import fotos from './fotos.json';

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Footer = styled.footer`
  position: relative;
  top: 50px;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #04244f;
  color: white;

  .media__social {
    display: flex;
    gap: 40px;
  }
`;

function App() {
  const [filtros, setFiltros] = useState();
  const [fotoss, setFoto] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const filtrandoEspaco = (objetosFiltro) => {
    setFiltros(
      fotoss.filter((item) => {
        if (item.tipo === objetosFiltro) {
          return item;
        } else if (objetosFiltro === 'toda') {
          return fotoss;
        }
      })
    );
  };

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }

    setFiltros(
      filtros.map((fotinha) => {
        return {
          ...fotinha,
          favorita: fotinha.id === foto.id ? !foto.favorita : fotinha.favorita,
        };
      })
    );
  };

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho />
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner
                texto={'A galeria mais completa de fotos do espaço!'}
                backgroundImage={bannerBackground}
              />
              <Galeria
                fotos={filtros} 
                aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={(foto) => setFotoSelecionada(foto)}
                filterSpace={filtrandoEspaco}
              />
            </ConteudoGaleria>
          </MainContainer>
        </AppContainer>

        <ModalZoom
          foto={fotoSelecionada}
          aoAlternarFavorito={aoAlternarFavorito}
          aoFechar={() => setFotoSelecionada(null)}
        />
        <Footer>
          <div className="media__social">
            <a href="">
              <img src="/icones/facebook.png" alt="facebook" />
            </a>
            <a href="">
              <img src="/icones/twitter.png" alt="twitter" />
            </a>
            <a href="">
              <img src="/icones/instagram.png" alt="instagram" />
            </a>
          </div>
          <p>Desenvolvido por Saraego Felix Barros</p>
        </Footer>
      </FundoGradiente>
    </>
  );
}

export default App;
