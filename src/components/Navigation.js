import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Test-store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Catalog</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

// import Link from "next/link";
// import { useState } from "react";
// import styles from "../styles/Navbar.module.css";

// export default function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link href="/">My App</Link>
//       </div>
//       <ul className={`${styles.menuItems} ${showMenu ? styles.showMenu : ""}`}>
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/contact">Contact</Link>
//         </li>
//       </ul>
//       <div className={styles.menuIcon} onClick={toggleMenu}>
//         <div className={styles.menuIconBars}></div>
//         <div className={styles.menuIconBars}></div>
//         <div className={styles.menuIconBars}></div>
//       </div>
//     </nav>
//   );
// }
