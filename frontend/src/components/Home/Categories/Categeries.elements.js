import styled from "styled-components";
import { Container } from "../../Elements.extend";
import { Link } from "react-router-dom";

export const CategoriesSection = styled.section``;

export const CategoriesContainer = styled(Container)``;

export const Category = styled.div`
    padding: 0;
    width: 100%;
    position: relative;

    @media screen and (min-width: 769px) {
        width: 33.333%;
        padding: 15px;
        max-height: 300px;
        ${({isBig}) => {
            console.log(isBig);
            if(isBig) {
                return`
                    width: 50%;
                `;
            }
        }}
       
    }

    @media screen and (min-width: 900px) {
        width: 25%;
        padding: 15px;
        ${({isBig}) => {
            if(isBig) {
                return`
                    width: 50%;
                `;
            }
        }}
    }

`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    objection-position: center;
`;

export const Title = styled(Link)`
    color: #fff;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
`;

export const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media screen and (min-width: 769px) {
        flex-direction: row;
    }

    @media screen and (min-width: 900px) {
        // flex-direction: row;
    }
`;

export const TitleWrapper = styled.div`
    position: absolute;
    padding: 20px;
    top: 50%;
    background-color: rgba(0,0,0,0.5);
    left: 50%;
    transform: translate(-50%, -50%);
`;