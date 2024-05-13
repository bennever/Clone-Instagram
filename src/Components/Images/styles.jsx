import styled from "styled-components";


export  const SectionImgContainer = styled.section`
position: relative;
flex-basis: 100%;
flex-basis:calc(33.333% - 20px);
margin: 10px;
cursor:pointer;
transition: .5s all ease-in;

`;
export  const Img = styled.img`
cursor: pointer;
width: 100%;

`;
export  const ImgMeta = styled.div`
display: none;
align-items: center;
justify-content: center;
position: absolute;
top:0;
left: 0;
right: 0;
bottom: 0;
${SectionImgContainer}:hover & {
    display: flex !important    ;
}
background-color: rgba(0,0,0,.5);

`;
export  const ImgIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #ffff;
margin-right: 50px;
`;
