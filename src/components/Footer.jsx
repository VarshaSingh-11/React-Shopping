import { Facebook, Instagram, Mail, MailOutline, Payment, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
background-color: #ffe5cc;
${mobile({flexDirection: "column" })}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0px;`;
const SocialContainer = styled.div`
display: flex;
padding-top: 10px;`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;`;

const Center = styled.div`flex: 1;
padding: 20px;
${mobile({display: "none" })}
`
const Title = styled.h3`
margin-bottom: 30px;`
const List = styled.ul` 

padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom : 20px;`

const Right = styled.div`flex: 1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8" })}`

const ContactItem = styled.div`
margin-bottom : 20px;
display: flex;
align-items: center;

`
const PaymentImage= styled.img`
width: 50%;`;


const Footer = () =>{
    return (<Container>
        <Left>
            <Logo>AXON.</Logo>
            <Desc>Nescafe 3 in 1 white and creamy.Coffee creamer from the highlands Lampung.Produce flavor and aroma are more stable, and suitable enjoyed.Can be presented for 30 cups; made from the best Indonesian Robusta Coffee
Smooth instant coffee premix</Desc>
<SocialContainer>
    <SocialIcon color="385999">
        <Facebook/>
    </SocialIcon>
    <SocialIcon color="E4405F">
        <Instagram/>
    </SocialIcon>
    <SocialIcon color="55ACEE">
        <Twitter/>
    </SocialIcon>
    <SocialIcon color="E60023">
        <Pinterest/>
    </SocialIcon>

</SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wisshlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem ><Room style ={{marginRight: "10px"}}/>48, Data Colony, Bhopal</ContactItem>
            <ContactItem><Phone style ={{marginRight: "10px"}}/>8966982733</ContactItem>
            <ContactItem><MailOutline style ={{marginRight: "10px"}}/>contact@varsha.singh</ContactItem>
            <PaymentImage src="https://www.pngplay.com/wp-content/uploads/8/Payment-Method-Download-Free-PNG.png"/>
        </Right>
    </Container>
    );
};
export default Footer;