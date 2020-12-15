import React from 'react';
import styled from 'styled-components';


const BoxCommon = styled.button`
    width : ${props => (props.big ? 100 : 50)}px;
    height: 30px;
    backgroun-color : red;
`;
export default function Box({size}){
    const isBig = size === 'big';
    const label = isBig ? '큰 버튼' : '작은 버튼';
    <BoxCommon isBig={isBig}>{label}</BoxCommon>
}