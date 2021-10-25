import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import {Button, Container} from 'react-bootstrap'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import {Navbar} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts'

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()
  console.log(user);
  return (
    <Navbar bg="dark" variant=''>
      <Container>
        <NavLink style={{color:'white', textDecoration: "none"}} to={SHOP_ROUTE}>Купить девайс</NavLink>
        {user.isAuth ? 
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button 
              variant={'outline-light'} 
              onClick={() => history.push(ADMIN_ROUTE)}
            >Админ панель</Button>
            <Button 
              variant={'outline-light'} 
              className='ms-4' 
              onClick={() => {
                history.push(LOGIN_ROUTE);
                user.setIsAuth(false);
              }}
            >Выйти</Button>
          </Nav>
        :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} 
              onClick={() => {
                user.setIsAuth(true)
              }}
            >Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
});

export default NavBar;