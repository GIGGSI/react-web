import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSingleCatalogPage, addFavorites } from '../../actions'
import styled from 'styled-components';


const SingleCatalogPage = ({ fetchSingleCatalogPage, singleCatalog, addFavorites }) => {
    const { id } = useParams();

    useEffect(() => {
        fetchSingleCatalogPage(+id)
    }, []);

    if (!singleCatalog) {
        return <CenderDiv>
            <h1>Loading...</h1>
        </CenderDiv>
    }

    return (
        <CardContainer>
            <Container>
                {singleCatalog.map((item) => {
                    return <DisplaySection key={item.id}>

                        <img src={item.url} alt={item.title} />

                        <CartContent>
                            <CardTitle>
                                <h3> {item.title}</h3>
                            </CardTitle>
                            <CardBody>

                                <Btn>
                                    <button
                                        onClick={() => addFavorites(item.albumId, item.id, item.title, item.thumbnailUrl, item.url,)}>
                                        Add To Favorites
                                    </button>
                                </Btn>
                            </CardBody>
                        </CartContent>
                    </DisplaySection >
                })}
            </Container>
        </CardContainer>
    )

}


const mapStateToProps = state => {
    return {
        singleCatalog: state.singleCatalog[0]

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addFavorites: (albumId, id, title, thumbnailUrl, url) => dispatch(addFavorites(albumId, id, title, thumbnailUrl, url)),
        fetchSingleCatalogPage: (id) => dispatch(fetchSingleCatalogPage(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCatalogPage)

const CenderDiv = styled.div`
text-align: center;
margin-top: 5rem;
h1{
    font-size:2rem
}
`

const CardContainer = styled.div`
 width:100%;
height:100%;
text-align:center;
padding:1rem 3rem;
padding-top:4rem;

`
const Container = styled.div`

display: grid;
grid-template-columns:1fr 1fr 1fr 1fr;
justify-content:center;
grid-row-gap: 2rem;
@media screen and (max-width:1100px){
grid-template-columns:1fr 1fr;
margin-top:5rem;
grid-row-gap:3rem;
}
@media screen and (max-width:768px){
grid-template-columns:1fr;
}
`


const DisplaySection = styled.div`
transition: 0.3s;
margin: 0 0.5rem;
background: #eee;
border-radius: 1rem 1rem 0 0;
img {
    width:100%;
    border-radius: 1rem 1rem 0 0;
    /* height:15rem; */
}
&:hover{
    transform :translateY(-1rem);
  
    -webkit-box-shadow: 5px 5px 15px 2px #000000; 
     box-shadow: 5px 5px 15px 2px #000000;
}

`


const CartContent = styled.div``

const CardTitle = styled.div`
height: 13vh;
/* margin:1rem 0 2rem 0; */
`

const CardBody = styled.div``

const Btn = styled.div`
text-align: center;
display: flex;
justify-content:center;
align-items:center;
button{
   
margin:1rem 0 1rem 0;
border: none;
  outline: none;
  width: 13rem;
  height:3rem;
   position: relative; 
  border-radius: 8px;
  letter-spacing: 0.7px;
  background-color: #5086bd;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3 all ease-in-out;
  &:hover{
      background-color: #1986bd;
      color:#F1C40F;
  }
}   
        
`