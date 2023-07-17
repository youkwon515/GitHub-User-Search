import {HTMLAttributes} from 'react';
import * as S from './styled';
type ProfileProps = HTMLAttributes<HTMLImageElement> & {
    src : string
    name : string
    followers : number
    following : number
    url : string
}

export default function Profile(props : ProfileProps) {
    const handleView = () => {
        window.open(props.url);
    }
    return (
        <S.Profile>
            <S.ProfileImgBox>
                <img src={props.src}/>
            </S.ProfileImgBox>
            <S.ProfileDataBox>
                <S.Name>{props.name}</S.Name>
                <S.Follow>{props.followers} followers</S.Follow>
                <S.Follow>{props.following} following</S.Follow>
                <S.Button onClick={handleView}>view</S.Button>
            </S.ProfileDataBox>
        </S.Profile>
    );
}