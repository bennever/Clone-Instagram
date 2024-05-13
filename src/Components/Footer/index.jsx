    import * as C from './styles';
    import {links} from '../../Data';



    export const Footer = () => {
    return (    


        <C.FooterContainer>
            <C.FooterContainerArea>
                <C.NavLink>
                    {links.map((item,index) =>  {
                        return <C.TextInfo key ={index}>{item.link}</C.TextInfo>
                    })}
                </C.NavLink>
                
                <C.FromMeta>
                    <C.TextInfo>Portugues Brasil</C.TextInfo>
                    <C.TextInfo>&copy; 2024 Instagram from Meta</C.TextInfo>
                </C.FromMeta>
            </C.FooterContainerArea>      
        </C.FooterContainer>


    )


    }