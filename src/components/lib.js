import styled from "@emotion/styled";

const Input = styled.input({
  borderRadius: "3px",
  border: "1px solid #f1f1f4",
  background: "#f1f2f7",
  padding: "8px 12px",
});

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

const buttonVariants = {
  primary: {
    background: `#3f51b5`,
    color: "white",
  },
  secondary: {
    background: "#f1f2f7",
    color: "#434449",
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
  background: "rgba(200, 200, 200)",
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
  backgroundColor: "white",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  display: "flex",
  flexDirection: "column",
  padding: "25px",
});

export { Button, Input, FormGroup, ModalBackground, ModalContainer };
