import React from "react";
import SideBar from "../components/SideBar";
import styled from "@emotion/styled";
import TopBar from "../components/TopBar";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <SideBar
      open={menuOpen}
      onClosed={() => setMenuOpen(false)}
      sideBar={
        <div style={{ width: 200, height: "100%", backgroundColor: "blue" }}>
          asdf
        </div>
      }
    >
      <TopBar />
      <Main>
        <button onClick={() => setMenuOpen(!menuOpen)}>Click</button>
        {children}
      </Main>
    </SideBar>
  );
};

export default RootLayout;

const Main = styled.main`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
