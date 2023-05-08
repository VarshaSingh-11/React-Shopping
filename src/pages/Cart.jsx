import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
background-color: #F9F1F6;
${mobile({padding: "10px" })}`

const Title = styled.h1`
font-weight: 300;
text-align: center;`
const Top= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;`;

const TopButton = styled.button`
padding: 10px;
font-weight 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black":"transparent"};
color: ${props=>props.type === "filled" && "white"}`;

const TopTexts = styled.div`
${mobile({display: "none" })}`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin 0px 10px;`;

const Mid = styled.div`
margin-bottom: 20px;`;
const Heading= styled.div``
const b = styled.h2`
font-size: 29px;`;

const Content = styled.div``;
const Produce = styled.div``;
const Desc = styled.div``;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column" })}`; 
const Info = styled.div`
flex: 3;`; 


const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column" })}
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;`;
const Image = styled.img`
width: 200px;`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;`;
const ProductId = styled.span`
`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%; 
background-color: ${props=>props.color}`;
const ProductSize = styled.span`
`; 
const PriceDetail = styled.span`
flex:1;
display: flex;
flex-ddirection: column;
align-items: center;
justify-content: center;`;

const ProductAmountContainer= styled.div`
display: flex;
align-itens: center;
margin-left: 50px;
margin-bottom: 20px;`;

const ProductAmount= styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 15px" })}`;

const ProductPrice= styled.div`
font-size: 30px;
font-weight: 200;
margin-top: 100px;
${mobile({mar5ginBottom: "20px" })}`;


const ProductName = styled.div``;

const Hr = styled.hr`
background-color: gray;
border: none;
height: 1px;`;
const Summary = styled.div`
flex: 1;
border : 1px solid black;
border-radius: 10px;
padding: 20px;
height: 50vh;

`; 
const SummaryTitle=styled.h1`
font-weight: 200;`;
const SummaryItem=styled.div`
margin: 30px 0px; 
display: flex; 
justify-content:space-between;
font-weight: ${props=> props.type=== "total" && "500"};
font-size: ${props=> props.type=== "total" && "24px"}; `;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const SummaryButton=styled.button`
width: 100%;
padding: 10px;
background-color: black; 
color: white;
font-weight: 600;`;



const Cart = () =>{
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                    <TopText>Delivery Details</TopText>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Mid>
                   <Heading> <b>Cart </b>(1 product) </Heading>
                    <Content>
                    Customs duties are likely to be applied to your order. Therefore, please note that customs duties will be at your own expense.
                    </Content>
                    <Produce><b>Product(s)</b> in stock</Produce>
                    <Desc> (At home between the 28/02/2023 and the 07/03/2023) </Desc>
                </Mid>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://di2ponv0v5otw.cloudfront.net/posts/2021/07/16/60f2613c920786cf67c8452f/m_60f26159163df46e0ee7f05c.jpg"/>
                                <Details>
                                    <ProductName><b>PRODUCT:</b>JESSEIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id:</b>8966982733</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>

                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.ebayimg.com/images/g/BeEAAOSwjtRhtPis/s-l500.jpg"/>
                                <Details>
                                    <ProductName><b>PRODUCT:</b>JESSEIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id:</b>8966982733</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>

                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>& 90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>& 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-& 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>& 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOWW</SummaryButton>
                    </Summary>
                    
                
                </Bottom>
            </Wrapper>
            <Footer/>

        </Container>
    );
};



export default Cart