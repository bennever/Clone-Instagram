import * as C from './styles';
import {Images} from '../../Components/Images'
import {feedinfo} from '../../Data';



export const Profile = () => {

const AvatarProfile = "https://img.freepik.com/fotos-gratis/renderizacao-3d-do-avatar-de-chamada-de-zoom_23-2149556785.jpg?t=st=1714670027~exp=1714673627~hmac=187086dccc4a2ac5ea389217f3ff8d8cc635885de39afbf68919bd4cc859d0d7&w=996";

    return (
    <C.ProfileContainer>
        <C.ProfileDetails>
            <C.ProfileDetailsLeft>
                <C.Profileimage src={AvatarProfile}/>  
            </C.ProfileDetailsLeft>

            <C.ProfileDetailsRight>
                <C.ProfileDetailUserName>
                    <C.TitleProfile><strong>Davi Siqueira </strong></C.TitleProfile>
                    <C.FollowerSendButton>seguir</C.FollowerSendButton>
                    <C.FollowerSendButton>enviar mensagem </C.FollowerSendButton>
                </C.ProfileDetailUserName>
           
                <C.ProfileDetailsMeta>
                    <C.ParagraphText><strong>27</strong> Publicacoes</C.ParagraphText>
                    <C.ParagraphText><strong>18,3</strong> mil seguidores</C.ParagraphText>
                    <C.ParagraphText><strong>120</strong> seguindo </C.ParagraphText>
                </C.ProfileDetailsMeta>

                <C.ProfileDetailsName>
                    <C.TitleProfile>Davi Siqueira </C.TitleProfile>
                    <C.AreaDescriptionProfile>
                    Programador web Full Stack<br/>
                    <a href = "https://youtube.com">https://youtube.com</a>
                    </C.AreaDescriptionProfile> 
                </C.ProfileDetailsName>

            </C.ProfileDetailsRight>
        </C.ProfileDetails>

        <C.ImageWrapper>
          {feedinfo.map(item => <Images items = {item} key = {item.id}/>)}
        </C.ImageWrapper>

    </C.ProfileContainer>

)


}