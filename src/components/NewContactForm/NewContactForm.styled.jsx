import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -50px;
  color: red;
`;

export default ErrorMsg;
