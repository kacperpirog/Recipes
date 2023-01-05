import styled from "styled-components";

export const StyledFavoriteRecipesDiv = styled.div`  
  aspect-ratio: 3/2
  object-fit: contain;
  margin-bottom: 1rem;
  margin-top:1rem ;
  
 ul{   
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    }
 div{
    width: 20vw;
     margin-bottom: 1rem;
  margin-top:1rem ;

 }
 h3{
    height: 3rem;
 }

   img {
    max-width: 110%;
    height: 15rem;
  }
  img:hover{
    opacity: 0.8;
  }

 
`;
