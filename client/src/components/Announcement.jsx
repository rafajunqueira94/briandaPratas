import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20px;
  background-color: #dd7c1e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <span role="img" aria-label="starEmoji">
        ⭐
      </span>{" "}
      O poder de brilhar está em suas mãos!{" "}
      <span role="img" aria-label="starEmoji">
        ⭐
      </span>
    </Container>
  );
};

export default Announcement;
