import styled from 'styled-components';
import BotaoIcone from '../BotaoIcone';
import Imagem from '../Galeria/Imagem';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;

  form {
    button {
      position: relative;
      right: 60px;
      top: 20px;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem
              fotos={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />
            <form action="dialog">
              <BotaoIcone formMethod="dialog">
                <img src="/icones/fechar.png" alt="icone de fechar" />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
