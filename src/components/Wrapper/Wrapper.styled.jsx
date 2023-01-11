import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
  .inputStyled {
    width: 40vw;
    font-size: 30px;
    border-radius: 5px;
  }
  .inputStyled:hover,
  .inputStyled:focus {
    border: 3px solid blue;
    outline: 0;
  }
  .styledBtn {
    padding: 5px;
    font-size: 30px;
    border-radius: 10px;
  }
  .styledBtn:hover,
  .styledBtn:focus {
    color: white;
    background-color: blue;
  }
`;

export default Wrapper;
