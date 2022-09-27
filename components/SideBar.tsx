import React, { PropsWithChildren, ReactElement } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type SideBarProps = PropsWithChildren<{
  open: boolean;
  onClosed?: () => void;
  sideBar: ReactElement;
}>;

const SideBar: React.FC<SideBarProps> = (props) => {
  return (
    <Container>
      <Backdrop open={props.open} onClick={props.onClosed} />
      <Drawer open={props.open}>{props.sideBar}</Drawer>
      <MainContent>{props.children}</MainContent>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const Backdrop = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000;
  transition: opacity 150ms ease-in-out;
  ${({ open }) =>
    open
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
  ${({ theme }) => theme.md} {
    opacity: 0;
    pointer-events: none;
  }
`;

const Drawer = styled.div<{ open: boolean }>`
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: transform 150ms ease-in-out;
  ${({ open }) =>
    !open &&
    css`
      transform: translateX(-100%);
    `}
  ${({ theme }) => theme.md} {
    transform: translateX(0);
  }
`;

const MainContent = styled.div``;
