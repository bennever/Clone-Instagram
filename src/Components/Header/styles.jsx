import styled from "styled-components";


export const Nav = styled.nav `
background-color: #fff;
border-bottom: 1px solid rgba(0,0,0,.0979);
`;

export const NavHeader = styled.div`
max-width:1200px;
    width:100%;
    display:flex;
    align-items:center;
    margin:auto;


`;

export const NavLeft = styled.div`         
width:33.333%;
display:flex;
cursor:pointer;
text-align:left;
`;

export const NavCenter = styled.div`
width:33.333%;
text-align:center;
`;

export const NavRight = styled.div`
width:33.333%;
 text-align:right;

`;

export const TextLogo = styled.h3`
font-size:20px;

`;

export const Input = styled.input`
font-size:16px;
border-radius:3px;
color:#262626;
border:0;
outline:none;
padding:11px 33px;
cursor:text;
text-align:left;
font-weight:300;
width:220px;
background-color: #9290901a;

`;

export const SignInButton = styled.button`
width:76px;
padding:0;
border-radius:8px;
border:0;
outline:none;
margin-right:6px;
background-color:#1b9df4fe;
cursor:pointer;
&:hover{
    background-color:#1b9df488;
    color:#1b9df4cd;
}

`;

export const RegisterButton = styled(SignInButton)`
background-color:transparent;
width:120px;
&:hover{
    background-color:transparent;


}
`;

export const TextButton = styled.p`
font-weight: bold;
color:#fff;

`;

export const TextRegisterButton = styled(TextButton)`
color:#1b9df4;
&:hover{
    color:#1b9df4b5;


}

`;
