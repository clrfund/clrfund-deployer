import React, { Fragment } from "react";
import { Box, Flex, Input, Button, Spinner, chakra, forwardRef, BoxProps } from "@chakra-ui/react";

import { ErrorMessage } from "./ErrorMessage";

export interface RegisterHelper {
  required?: string;
  validate?: any;
  pattern?: {
    value: RegExp;
    message: string;
  };
  setValueAs?: (value: any) => any;
}

export const Form = ({ children, ...rest }) => {
  return (
    <chakra.form
      sx={{
        left: "0px",
        top: "0px",
        minWidth: "359px",
        minHeight: "220px",
        background: "linear-gradient(103.01deg, rgba(0, 0, 0, 0.5) 0.49%, rgba(0, 0, 0, 0.4) 100%)",
        boxShadow: "0px 16px 32px rgba(134, 124, 210, 0.2)",
        backdropFilter: "blur(50px)",
        borderRadius: "32px",
      }}
      {...rest}>
      {children}
    </chakra.form>
  );
};

export const FormTitle = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        fontFamily: "heading",
        fontSize: "20px",
        lineHeight: "24px",
        textAlign: "center",
        textTransform: "capitalize",
        color: "white",
      }}
      {...rest}>
      {children}
    </Box>
  );
};

export const FormDetail = (props) => {
  return (
    <Box
      sx={{
        fontFamily: "detail",
        fontSize: "12px",
        lineHeight: "14px",
        textAlign: "center",
        fontWeight: "regular",
        color: "white",
        overflow: "hidden",
      }}
      width="266px"
      margin="auto"
      {...props}
    />
  );
};

export interface FormInputProps {
  errors?: any;
  label?: any;
}
export const FormInput = forwardRef<BoxProps & FormInputProps, "input">((props, ref) => {
  return (
    <React.Fragment>
      <Flex
        minHeight="80px"
        mx="5%"
        my="2.5"
        py="3"
        className="form-item"
        flexDirection="column"
        boxShadow="0px 16px 32px rgba(134, 124, 210, 0.2)"
        borderRadius="20px"
        sx={{
          backdropFilter: "blur(30px)",
          background: "linear-gradient(103.8deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100.69%)",
        }}>
        <Flex className="form-label-container" flexWrap="wrap" flexDirection="row" mb="2" verticalAlign="top" mx="4">
          <Box className="form-label" mr="2">
            <Box
              sx={{
                fontFamily: "heading",
                fontSize: "xs",
                fontWeight: "regular",
                lineHeight: "19px",
                color: "#FFFFFF",
                overflowWrap: "anywhere",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              {...props}>
              {props.label}
            </Box>
          </Box>

          <ErrorMessage
            errors={props.errors}
            name={props.name ? props.name : ""}
            render={({ message }) => (
              <Box
                className="form-error"
                textAlign="left"
                mt="3px"
                mr="1"
                sx={{
                  overflowWrap: "anywhere",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "error",
                  fontSize: "xs",
                  fontWeight: "regular",
                  lineHeight: "tight",
                  color: "#fff650",
                  "::before": { display: "inline", content: '"⚠ "' },
                }}>
                {message}
              </Box>
            )}
          />
        </Flex>
        <Flex className="form-input-container" flexDirection="row" mx="4">
          <Input
            ref={ref}
            className="form-input"
            name={props.name}
            placeholder={props.placeholder}
            sx={{
              border: "none",
              width: "100%",
              fontSize: "base",
              lineHeight: "26px",
              fontFamily: "heading",
              fontWeight: "normal",
              background: "transparent",
              color: "#FFFFFF",
            }}
          />
        </Flex>
      </Flex>
    </React.Fragment>
  );
});

export interface FormSubmitProps {
  loading?: boolean;
}
export const FormSubmit = ({ children, loading, ...rest }) => {
  return loading ? (
    <React.Fragment>
      <Flex mx="auto" className="form-submit" flexDirection="column">
        <Spinner />
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Flex mx="auto" className="form-submit" flexDirection="column">
        <Button
          type="submit"
          sx={{
            appearance: "none",
            display: "inline-block",
            fontFamily: "Apex Mk3",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "sm",
            lineHeight: "tight",
            textAlign: "center",
            letterSpacing: "tight",
            textTransform: "uppercase",
            color: "text",
            bg: "background",
            minWidth: "295px",
            minHeight: "55px",
            borderRadius: "2xl",
            mx: "auto",
          }}
          {...rest}>
          {children}
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export interface FormErrorProps {
  error?: any;
}
export const FormError = ({ error, ...rest }) => {
  return error ? (
    <React.Fragment>
      <Flex mx="auto">
        <Box
          width="266px"
          mx="auto"
          textAlign="center"
          {...rest}
          sx={{
            fontFamily: "error",
            fontSize: "10px",
            fontWeight: "regular",
            lineHeight: "tight",
            color: "#fff650",
            "::before": { display: "inline", content: '"⚠ "' },
            overflow: "hidden",
          }}>
          {error}
        </Box>
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export interface FormReceiptProps {
  receipt?: any;
}
export const Receipt = ({ receipt, ...rest }) => {
  const json2String = (value) => {
    try {
      return JSON.stringify(value, null, 2);
    } catch (e) {
      return false;
    }
  };

  return receipt ? (
    <React.Fragment>
      <Flex mx="auto">
        <Box
          width="266px"
          mx="auto"
          textAlign="center"
          sx={{
            fontFamily: "monospace",
            fontSize: "8px",
            fontWeight: "regular",
            lineHeight: "tight",
            color: "#FFFFFF",
            overflow: "hidden",
          }}
          {...rest}>
          <Fragment>{json2String(receipt)}</Fragment>
        </Box>
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export interface ExplorerLinkProps {
  url?: string;
}
export const ExplorerLink = ({ url, ...rest }) => {
  return url ? (
    <React.Fragment>
      <Flex mx="auto">
        <Box
          width="266px"
          mx="auto"
          textAlign="center"
          fontSize="12px"
          as="a"
          {...rest}
          sx={{
            fontFamily: "detail",
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "center",
            fontWeight: "regular",
            color: "darksalmon",
          }}
          href={url}>
          {url}
        </Box>
      </Flex>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

/////////////REACT-HOOK-FORM HELPERS////////////////

const registerAddress: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^0x[a-fA-F0-9]{40}$/,
    message: "Invalid ethereum address",
  },
  setValueAs: (value) => value,
};
const registerUint256: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Invalid amount",
  },
  setValueAs: (value) => value,
};

const registerUint8: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Invalid amount",
  },
  setValueAs: (value) => value,
};
const registerBytes32: RegisterHelper = {
  required: "This field is required",
  validate: {
    isValidJSON: (value) => {
      try {
        JSON.parse(value);
        console.log(JSON.parse(value));
      } catch (e) {
        return "Failed to parse JSON";
      }
      return true;
    },
  },

  setValueAs: (value) => value,
};
const registerBytes: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /^0x[a-fA-F0-9]+$/,
    message: "Invalid hex in call data",
  },
  setValueAs: (value) => value,
};
const registerString: RegisterHelper = {
  required: "This field is required",
  pattern: {
    value: /[a-zA-Z0-9]+/,
    message: "Invalid string in call data",
  },
  setValueAs: (value) => value,
};

export const Web3Form = {
  Form: Form,
  Title: FormTitle,
  Detail: FormDetail,
  Input: FormInput,
  Submit: FormSubmit,
  Error: FormError,
  Receipt: Receipt,
  ExplorerLink: ExplorerLink,
  registerAddress: registerAddress,
  registerUint8: registerUint8,
  registerUint256: registerUint256,
  registerBytes32: registerBytes32,
  registerBytes: registerBytes,
  registerString: registerString,
};
export default Web3Form;
