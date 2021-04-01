import styled from "styled-components";
import { Container } from "../../Elements.extend";
import { Link } from 'react-router-dom';
import image from '../../../assets/images/banner.png';

export const BannerSection = styled.section`
    padding: 30px 0;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;

`;

export const BannerContainer = styled(Container)`
    ${Container}
`;

export const BannerWrapper = styled.div`
    padding: 15px;
    text-align: center;
`;

export const Heading = styled.h2`
    font-size: 2rem;
`;

export const Text = styled.p`
    margin-bottom: 20px;
    color: #464646;
`;

export const Button = styled(Link)`
    padding: 10px 20px;
    display: inline-block;
    background: #2ecc71;
    color: #fff;
    text-decoration: none;
    font-weight: 200;
    font-size: 0.8rem;
    text-transform: uppercase;
    transition: background 0.3s;
    &:hover {
        background: #27ac5f;
    }
`;

