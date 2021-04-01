import styled from "styled-components";
import { Container } from "../Elements.extend";

export const PostSection = styled.section``;

export const PostContainer = styled(Container)`
    ${Container}
`;

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 796px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Heading = styled.h2`
    margin-bottom: 30px;
`;

export const ImageWrapper = styled.div`
    height: 500px;
    @media screen and (min-width: 796px) {
        margin-right: 30px;
        // width: 300px;
    }
`;

export const Image = styled.img`
    width: 100%;
    
    object-fit: cover;
    object-position: center;
    height: 100%; 

    @media screen and (min-width: 796px) {
        width: 500px;
    }
`;

export const Content = styled.div``;

export const Text = styled.p``;

export const Date = styled.p``;

export const Wrapper = styled.div`
    padding: 15px;
`;