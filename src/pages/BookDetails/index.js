import React from 'react';
import { Container, Content, Img, Title } from './styles';
import Books from '../../assets/Book.png'

export default function BookDetails(){
    return(
        <Container>
            <Content>
                <Img source={Books}/>
            </Content>
            
        </Container>
    )
}