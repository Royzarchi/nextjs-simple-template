import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";

const TopBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Container>
      <Avatar
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  align-items: center;
  background-color: #333333;
  height: 4rem;
`;

const Avatar = styled.div`
  max-height: 3rem;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 200px;
  //opacity: 0.2;
  transition: opacity;
  transition-duration: 150ms;
  // ${({ theme }) => theme.md} {
  //   opacity: 1;
  // }
  background-color: ${(props) => props.theme.colors.text.primary.enabled};
`;
