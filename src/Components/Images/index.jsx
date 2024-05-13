import * as C from './styles';

import { 
    IoHeartOutline,
    IoPlayOutline,
    IoChatbubbleOutline
} from "react-icons/io5";

export const Images = ({items}) => {
return (

<C.SectionImgContainer>
    <C.Img src={items.source}/>
    <C.ImgMeta>
        <C.ImgIcons>{items.isVideo ? 
              <IoPlayOutline style ={{marginRight:"10px"}}/> :
              <IoHeartOutline/>}
             {items.likes}
     </C.ImgIcons>
        <C.ImgIcons>      
            <IoChatbubbleOutline style ={{marginRight:"10px"}}/>
            {items.comments}
        </C.ImgIcons>
    </C.ImgMeta>


</C.SectionImgContainer>
)
}