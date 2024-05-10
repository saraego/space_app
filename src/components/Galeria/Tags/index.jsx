import { styled } from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 56px;
  gap: 64px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: end;
  gap: 64px;
`;
const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ filterSpace }) => {
  return (
    <>
      <TagsContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        <Div>
          {tags.map((tag) => (
            <Tag key={tag.id} onClick={() => filterSpace(tag.tipo)}>
              {tag.titulo}
            </Tag>
          ))}
        </Div>
      </TagsContainer>
    </>
  );
};

export default Tags;
