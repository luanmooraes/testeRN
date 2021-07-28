import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Title, Content, Img, ButtonImg, ButtonAdd} from './styles';

import { useNavigation } from '@react-navigation/native';

import Img1 from '../../assets/imagem1.png';
import Img2 from '../../assets/imagem2.png';
import Button from '../../assets/button.png';

import { Ionicons } from '@expo/vector-icons';

export default function Home(){
    const navigation = useNavigation()
    
    return(
        <Container>
            <Content>
                <Title>Popular Now</Title>
                
                <ScrollView
                    horizontal
                    style={{minHeight: 120, maxHeight: 250, paddingLeft: 24}}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingRight: 40}}
                >
                    <ButtonImg onPress={()=>navigation.navigate('BookDetails')}>
                        <Img source={Img1}/>
                    </ButtonImg>
                    <ButtonImg onPress={()=>navigation.navigate('BookDetails')}>
                        <Img source={Img2}/>
                    </ButtonImg>
                    <ButtonImg onPress={()=>navigation.navigate('BookDetails')}>
                        <Img source={Img1}/>
                    </ButtonImg>

                </ScrollView>
                
                <ButtonAdd>
                    <Ionicons name="add-circle" size={70} color="#413B89" />
                </ButtonAdd>
            </Content>
        </Container>
    )
}
