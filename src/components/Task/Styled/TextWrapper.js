import styled from 'styled-components';

export const TextWrapper = styled.p`
    width: 50%;  
    text-decoration: ${({ complition }) => (complition ? 'line-through' : 'none')};
    word-wrap: break-word;
`;
