import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { AiFillStar } from 'react-icons/ai'
import styled from 'styled-components';


const Navbar = ({ favorites }) => {

  return <NavbarSection>
    <NavbarContainer>
      <NavbarUl>
        <li>
          <Link to="/" >
            Catalog
          </Link>
        </li>
      </NavbarUl>
      {favorites &&
        <NavBarIcon>
          <Link to="/favorites">
            <Icon />
            <ParagraphCount>{favorites.length}</ParagraphCount>
          </Link>
        </NavBarIcon>
      }
    </NavbarContainer>
  </NavbarSection>
}


const mapStateToProps = state => {
  return {
    favorites: state.favorites.action
  }
}

export default connect(mapStateToProps)(Navbar)

const NavbarSection = styled.div`
 background: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;

`
const NavbarContainer = styled.div`
 display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`
const NavbarUl = styled.ul`
display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  justify-content: center;

  li{
    height: 60px;
  border-bottom: 2px solid transparent;
  &:hover{
    border-bottom: 2px solid #F1C40F;
  }
  }

  a{
    color: #fff;
  display: flex;
  text-decoration: none;
  font-size: 2.3rem;
  }
`

const NavBarIcon = styled.div`
  display: flex;
  
  font-size: 3rem;
  margin-right: 4rem;
`
const Icon = styled(AiFillStar)`
  cursor: pointer;
  text-decoration: none;
  color: #f1c40f;
  height: 60px;
  margin-top: 0.7rem;
  align-items: center;
  position: absolute;
  align-items: center;
  justify-content: center;
`
const ParagraphCount = styled.p`
 position: absolute;
 color: #f1c40f;
  font-size: 1.35rem;
`