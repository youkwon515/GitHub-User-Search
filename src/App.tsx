import Profile from "./components/Profile";
import Input from "./components/Input";
import {ChangeEvent, useState} from 'react';
import fetchUser from "./userSearchService";
import * as S from './styled';

export default function App() {
    const [value, setValue] = useState<string>('');
    const [profileName, setprofileName] = useState<string>('');
    const [profileImg, setprofileImg] = useState<string>('');
    const [profileFollowers, setprofileFollowers] = useState<number>(0);
    const [profileFollowing, setprofileFollowing] = useState<number>(0);
    const [profileUrl, setprofileUrl] = useState<string>('');

    const handleInput = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setValue(value);
    }

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const data = await fetchUser(value);
            if (data.message === 'Not Found') {
                alert('Not Found');
                return;
            }
            setprofileName(data.name || data.login);
            setprofileImg(data.avatar_url);
            setprofileFollowers(data.followers);
            setprofileFollowing(data.following);
            setprofileUrl(data.html_url);
        }
    };

    return (
        <S.card>
            <Input value={value} onChange={handleInput} onKeyUp={handleKeyPress} placeholder="user search"/>
            {profileName && <Profile src={profileImg} name={profileName} followers={profileFollowers} following={profileFollowing} url={profileUrl}/>}
        </S.card>
    );
}