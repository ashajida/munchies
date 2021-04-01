import styled from "styled-components"
import { Container, Button } from "../../Elements.extend";

export const Section = styled.section``;

export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
`;

export const DashboardContainer = styled(Container)`
    ${Container}
`;

export const Heading = styled.h2`
    margin-bottom: 60px;
`;


export const Table = styled.table`
    width: 100%;
`;

export const Row = styled.tr`
// &:nth-child(even) {background: #CCC}
`;

export const Data = styled.td`
    padding: 15px;
    img {
        width: 150px;
        object-fit: cover;
    }
`;

export const THeading = styled.th``;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const ButtonLink = styled(Button)`
    display: inline-block;
    font-size: 0.8rem;
    padding: 10px;
    margin-bottom: 10px;
   ${({red}) => {
       if(red) {
          return `
            background: red;
            &:hover {
                background: red;
            }
          `;
       }
   } }
`;

export const ButtonWrapper = styled.div`
   margin-bottom: 60px;
   a {
       &:first-of-type {
        margin-right: 10px;
       }
       
   }
`;