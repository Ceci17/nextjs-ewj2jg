import { Button as MuiButton } from '@material-ui/core';
import styled from 'styled-components';

export const Button = styled(MuiButton)`
  ${props => console.log('styled', props)}
`;
