import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import {Button, Container} from 'react-bootstrap'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import {Navbar} from 'react-bootstrap'
const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant=''>
      <Container>
        <NavLink style={{color:'white', textDecoration: "none"}} to={SHOP_ROUTE}>Купить девайс</NavLink>
        {user.isAuth ? 
        <Nav className="ml-auto" style={{color: 'white'}}>
          <Button variant={'outline-light'}>Админ панель</Button>
          <Button variant={'outline-light'} className='ms-4'>Выйти</Button>
        </Nav>
        :
        <Nav className="ml-auto" style={{color: 'white'}}>
          <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
        </Nav>
        }
      </Container>
    </Navbar>
  )
});

export default NavBar;