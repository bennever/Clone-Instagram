import React from "react";
import * as C from './styles';

export const Header = () => {
return (

    <C.Nav>
        <C.NavHeader>
            <C.NavLeft>
                <C.TextLogo>Instagram</C.TextLogo>
            </C.NavLeft>
            <C.NavCenter>
                <C.Input 
                type="search" 
                placeholder="Pesquisar"/>
            </C.NavCenter>
            <C.NavRight>
                <C.SignInButton>
                    <C.TextButton>Entrar</C.TextButton>
                </C.SignInButton>
                <C.RegisterButton>
                    <C.TextRegisterButton>Cadastre-se</C.TextRegisterButton>
                </C.RegisterButton>
            </C.NavRight>
        </C.NavHeader>
    </C.Nav>

)


}