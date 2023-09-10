'use client'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import { Fragment } from 'react';

const navData = [
  {
    title: 'home', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'headers', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'about us', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'our journal', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'portfolio', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'services', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'features', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  },
  {
    title: 'contact', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
  }

]

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-slate-100 lg:bg-white lg:flex-col lg:justify-center lg:items-center">
      <div className='flex justify-between items-center w-full h-24 lg:justify-center mx-20'>
        <Navbar.Brand href="#home">
          <Image src='/logo@2x.png' width={69} height={63} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle label='hello' aria-controls="basic-navbar-nav" />
      </div>
      <div className='container'>
        <Navbar.Collapse className='bg-slate-100' id="basic-navbar-nav">
          <Nav className="mx-auto w-full lg:justify-center text-[16px] font-semibold uppercase">
            {navData.map((item, index) => {
              return (
                <NavDropdown key={index} className={`px-2 py-2`} title={item.title} id="basic-nav-dropdown" renderMenuOnMount={true} menuVariant='dark'>
                  {item.subMenu.map((subItem, i) => {
                    return (
                      <Fragment key={i}>
                        <NavDropdown.Item className='' href="#action/3.1">{subItem.title}</NavDropdown.Item>
                        <NavDropdown.Divider />
                      </Fragment>
                    )
                  })}

                </NavDropdown>
              )
            })}

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
