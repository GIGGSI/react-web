import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CatalogList = ({ fetchData, catalog }) => {

    useEffect(() => {
        fetchData()
    }, []);


    const uniqueItems = catalog.reduce((accumulator, item) => {
        const isDuplicateItem = accumulator.find(
            (i) => i.albumId === item.albumId
        );

        if (!isDuplicateItem) {
            return [...accumulator, item];
        }

        return accumulator;
    }, [])

    if (!uniqueItems) {
        return <CenderDiv>
            <h1>Loading...</h1>
        </CenderDiv>

    }
    return (
        <CatalogListContainer>
            {uniqueItems.map((item) => {
                return <Container key={item.id}>
                    <Link to={`/singleCatalogPage/${item.albumId}`} >
                        <CatalogImg src={item.url}
                            alt={item.title} />
                    </Link>
                    <Content>
                        <Description>
                            <h3>Catalog: {item.albumId}</h3>
                            <p >See More photos</p>
                        </Description>
                    </Content>
                </Container>
            })}
        </CatalogListContainer>
    )
}


const mapStateToProps = state => {

    return {
        catalog: state.catalog
    }
}

export default connect(mapStateToProps, { fetchData })(CatalogList)

const CenderDiv = styled.div`
text-align: center;
margin-top: 5rem;
h1{
    font-size:2rem
}
`

const CatalogListContainer = styled.div`
 margin-top: 5rem;
 margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items:center;
  align-items: center;
  text-align:center;
  grid-row-gap:2rem;
  @media screen and (max-width:1100px){
grid-template-columns:1fr 1fr;
margin-top:5rem;
grid-row-gap:3rem;
}
@media screen and (max-width:768px){
grid-template-columns:1fr;

}

`

const Container = styled.div`

  
  justify-content:center;
  align-items:center;
 opacity: 0.8;
  &:hover{
    opacity:1
  }
  &:hover div p,
  &:hover div h3{
 opacity: 1;
 transform:rotate(0deg);
 transform: translateY(-45px);

  }
`
const CatalogImg = styled.img`
width: 80%;
  height: 100%;
  object-fit:cover;
  
  
  transform-origin:center;
  transform:perspective(800px)
   rotateY(25deg);
  transition:0.5s;
  &:hover{
    transform:rotateY(0deg);
       opacity:1;
  }
`

const Content = styled.div`
p,h3{
    opacity:0;
    transform: rotate(-5deg);
    transition: 0.2s linear;
    background: white;
    height:35px;
   

}

`
const Description = styled.div`

`