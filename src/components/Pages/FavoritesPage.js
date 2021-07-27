import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';


const FavoritesPage = ({ favorites }) => {

    if (!favorites) {
        return <h1>There is no added favorites picture</h1>
    }
    return <ImgSection>
        <h1>Your favorites images</h1>
        <ImgContainer>
            {favorites.map((item, index) => {
                return <SingleImg key={index}>
                    <img src={item.url} alt={item.title} />
                </SingleImg>
            })}
        </ImgContainer>
    </ImgSection>


}
const mapStateToProps = state => {
    return {
        favorites: state.favorites.action
    }
}

export default connect(mapStateToProps)(FavoritesPage)

const ImgSection = styled.div`
margin-top:2rem;
width:100%;
height:100%;
h1{
    text-align:center;
    margin:2rem;
}
`

const ImgContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;

@media screen and (max-width: 900px) {
    grid-template-columns:1fr 1fr;
}
@media screen and (max-width: 640px) {
    grid-template-columns:1fr;
}
`
const SingleImg = styled.div`
img {
    width:100%;
    opacity:0.9;
    &:hover{
opacity:1;
}
}
`

