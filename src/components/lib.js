import styled from "@emotion/styled/macro";
import * as colors from "../styles/colors";
import * as mq from "../styles/media-queries";

const Input = styled.input({
  borderRadius: "3px",
  border: `1px solid ${colors.gray10}`,
  background: colors.gray,
  padding: "8px 12px",
});

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.base,
  },
  secondary: {
    background: colors.gray,
    color: colors.text,
  },
};
const Button = styled.button(
  {
    padding: "10px 15px",
    border: "0",
    lineHeight: "1",
    borderRadius: "3px",
  },
  ({ variant = "primary" }) => buttonVariants[variant]
);

const ModalBackground = styled.div({
  width: "100vw",
  height: "100vh",
  background: colors.gray,
  position: "fixed",
  display: "flex",
  top: "0",
  justifyContent: "center",
  alignItems: "center",
});

const ModalContainer = styled.div({
  width: "300px",
  height: "400px",
  borderRadius: "12px",
  backgroundColor: colors.base,
  boxShadow: colors.boxShadow,
  display: "flex",
  flexDirection: "column",
  padding: "25px",
  [mq.small]: {
    width: "100%",
    margin: "10vh auto",
  },
});

export { Button, Input, FormGroup, ModalBackground, ModalContainer };
