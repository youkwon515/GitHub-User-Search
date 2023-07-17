import {InputHTMLAttributes} from 'react';
import * as S from './styled';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string
}

export default function Input(props : InputProps) {
    return (
        <S.InputBox>
            <input {...props}/>
        </S.InputBox>
    );
}