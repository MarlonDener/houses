import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import menuData from "../data/MenuData";
import { Button } from "./Styles/Button";
import { AiOutlineAlignRight } from "react-icons/ai";

const Nav = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  background: #000d1a;
  top: 0;
  left: 0;
  position: absolute;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-weight: 700;
`;
const MenuBars = styled(AiOutlineAlignRight)`
  display: none;
  font-size: 40px;
  height: 40px;
  width: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 3px;
  right: 3px;
  transform: translate(-40%, 15%);

  @media screen and (max-width: 758px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  margin-right: -40px;
  align-items: center;

  @media screen and (max-width: 758px) {
    display: none;
  }
`;

const NavMenuLinks = styled.a`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  display: inline-block;
  margin: 0px 5px;
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 758px) {
    display: none;
  }
`;

const Navbar = ({ toogle }) => {
  return (
    <Nav>
      <Logo to="/">PREDIUM</Logo>

      <MenuBars onClick={toogle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks href={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button primary={false} href="#contato">Contato</Button>
      </NavBtn>
    </Nav>
  );
};
export default Navbar;
