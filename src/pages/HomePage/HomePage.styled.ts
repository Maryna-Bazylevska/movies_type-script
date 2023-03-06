import styled from "styled-components";
import { Link } from "react-router-dom";
export const MoviesList = styled.ul`
margin-bottom: 40px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
list-style: none;

`; 
export const MoviesTitle=styled.h3`
front-size:16px;
text-align: center;
color: white;
`
export const MoviesItem=styled(Link)`
display: flex;
flex-direction: column;
gap: 10px;
cursor: pointer;
padding-bottom: 20px;
background-color: black;
text-decoration: none;
width: 70%;
margin-bottom: 40px;

`