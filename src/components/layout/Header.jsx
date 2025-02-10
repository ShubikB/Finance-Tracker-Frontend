import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Link } from "react-router-dom"
import { ImExit } from "react-icons/im"
import { HiOutlineLogin } from "react-icons/hi"
import { IoCreate } from "react-icons/io5"
import { RiDashboard3Fill } from "react-icons/ri"
import { CiBank } from "react-icons/ci"
import { AiFillBug } from "react-icons/ai"
import { useUser } from "../../context/userContext"

export const Header = () => {
  const { user, logout } = useUser()

  console.log("User object:", user) //  to log the user object

  const handleOnLogOut = () => {
    logout()
  }

  return (
    <Navbar expand='lg' variant='dark' className='bg-body-dark'>
      <Container>
        <Navbar.Brand href='#home'>Finance Tracker</Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {user?._id ? (
              <>
                <div>Welcome {user.username}</div>
                <Nav.Link as={Link} to='dashboard'>
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to='transaction'>
                  Transaction
                </Nav.Link>
                <Nav.Link onClick={handleOnLogOut} as={Link} to='/'>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='signup'>
                  Sign Up
                </Nav.Link>

                <Nav.Link as={Link} to='login'>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
