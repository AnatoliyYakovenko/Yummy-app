import styled from '@emotion/styled';


export const StyledBtn = styled.button`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  width: ${props => props.width};
  height:${props => props.height};
  color: ${props => props.textColor};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};
  background-color: ${props => props.backgroundColor};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: ${props => props.filter};
  cursor: pointer;

    &:hover {
   transform: scale(0.95);
  }
 `;
