import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
  text-align: end;
  .inputStyled {
    width: 60%;
    font-size: 30px;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: 0 0 0 1px rgb(190, 234, 237),
      0.3em 0.3em 4em rgba(30, 129, 176, 0.5);
  }
  .inputStyled:hover,
  .inputStyled:focus {
    border: 4px solid #1e81b0;
    outline: 0;
  }
  .styledBtn {
    padding: 15px;
    font-size: 30px;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: inset 0 -3em 3em #1e81b0, 0 0 0 2px rgb(190, 234, 237),
      0.3em 0.3em 1em rgba(30, 129, 176, 0.5);
    color: white;
  }
  .styledBtn:hover,
  .styledBtn:focus {
    color: black;
    border: 2px solid white;
  }
`;

export default Wrapper;
