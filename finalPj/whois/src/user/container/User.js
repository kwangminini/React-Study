import React, { useEffect } from 'react';
import {PageHeader, Col, Row} from 'antd';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { actions} from '../state';
export default function User({match}){
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const name = match.params.name;
    useEffect(()=>{
        dispatch(actions.fetchUser(name));
    },[name]);
    return(
        <Row justify="center">
            <Col xs={24} md={20} lg={14}>
              <PageHeader onBack={history.goBack} title="사용자 정보">{user?.name}</PageHeader>
            </Col>
        </Row>
    )
}