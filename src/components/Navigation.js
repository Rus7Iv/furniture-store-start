import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h1 className={styles.brand}>Furniture</h1>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <div className={styles.nav_items}> */}
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/products" className={styles.link}>
              Catalog
            </Link>
            <Link href="/cart" className={styles.link}>
              Cart
            </Link>
            {/* <NavDropdown
              title="Sale"
              id="basic-nav-dropdown"
              className={styles.link}
            >
              <NavDropdown.Item href="#action/3.1">Category</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Catalog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Archive</NavDropdown.Item>
            </NavDropdown> */}
            {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

// import React from "react";
// import Link from "next/link";
// import styles from "../styles/Navbar.module.css";

// const Navigation = () => {
//   return (
//     <navbar className={styles.navbar}>
//       <h1>NavBar</h1>
//       <div className={styles.nav_items}>
//         <Link href={"/"} className={styles.link}>
//           Home
//         </Link>
//         <Link href={"/products"} className={styles.link}>
//           Catalog
//         </Link>
//         <Link href={"/cart"} className={styles.link}>
//           Cart
//         </Link>
//       </div>
//     </navbar>
//   );
// };

// export default Navigation;
