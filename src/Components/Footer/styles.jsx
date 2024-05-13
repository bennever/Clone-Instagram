import styled from "styled-components";

    export const FooterContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    background-color: #fafafa;
    `;
    export const FooterContainerArea= styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: center;
    `;
    export const NavLink= styled.a`
    display: flex;
    `;
    export const TextInfo= styled.p`
    color: #a2a2a2;
    margin: 10px;
    cursor:pointer;
    &:hover{
        text-decoration: underline;
    }
    `;
    export const FromMeta= styled.div`
    display: flex;
    `;
