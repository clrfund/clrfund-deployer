import React, { forwardRef, Fragment, FunctionComponent } from "react";

import { Box, Flex, Motion } from "./Flexbox";
import { BoxProps, FormProps, InputProps } from "./types";
import { FormComponent } from "./Form";
import { Input } from "./Input";
import { Loader } from "./Loader";
import { Submit } from "./Submit";
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
export interface IForm {
  Form: React.FunctionComponent<FormProps>;
  Title: React.FunctionComponent<BoxProps>;
  Detail: React.FunctionComponent<BoxProps>;
  Input: React.FunctionComponent<FormInputProps & InputProps>;
  Submit: React.FunctionComponent<FormSubmitProps & InputProps>;
  Error: React.FunctionComponent<FormErrorProps & BoxProps>;
  Receipt: React.FunctionComponent<FormReceiptProps & BoxProps>;
  ExplorerLink: React.FunctionComponent<ExplorerLinkProps & BoxProps>;
  registerAddress: RegisterHelper;
  registerUint256: RegisterHelper;
  registerBytes32: RegisterHelper;
  registerBytes: RegisterHelper;
  registerUint8: RegisterHelper;
  registerString:RegisterHelper;
}

export const FormContext: React.Context<{ hasMounted: any }> = React.createContext({
  hasMounted: true,
});

export function useFormContext() {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error(`FormContext compound components cannot be rendered outside the FormContext component`);
  }
  return context;
}

export function useEffectAfterMount(cb) {
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, [cb]);
}

export const Form: FunctionComponent<FormProps> = forwardRef(({ children, ...rest }, ref) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const toggleFlag = React.useCallback((setState) => setState((state) => !state), []);

  useEffectAfterMount(() => {
    toggleFlag(setHasMounted);
  });
  return (
    <FormContext.Provider value={{ hasMounted: hasMounted }}>
      <FormComponent
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
      </FormComponent>
    </FormContext.Provider>
  );
});

export const FormTitle: React.FunctionComponent<BoxProps> = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        fontFamily: "heading",
        fontSize: "20px",
        lineHeight: "24px",
        textAlign: "center",
        textTransform: "capitalize",
        color: "white",
      }}
      {...props}
    />
  );
});

export const FormDetail: React.FunctionComponent<BoxProps> = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
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
});

export const FormLoader: React.FunctionComponent<InputProps> = forwardRef((props, ref) => {
  return (
    <Loader
      ref={ref}
      as="span"
      width="295px"
      height="68px"
      borderRadius="20px"
      disabled
      mx="auto"
      {...props}
      sx={{
        appearance: "none",
        display: "inline-block",
        fontFamily: "Apex Mk3",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "19px",
        textAlign: "center",
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "text",
        bg: "background",
        position: "relative",
        width: "2rem",
        height: "2rem",
        boxSizing: "border-box",
        margin: "auto",
      }}>
      <Motion
        sx={{
          display: "block",
          width: "2rem",
          height: "2rem",
          border: "0.3rem solid #e9e9e9",
          borderTop: "0.3rem solid #3498db",
          borderRadius: "50%",
          position: "absolute",
          boxSizing: "border-box",
          top: 0,
          left: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
    </Loader>
  );
});

export interface FormInputProps {
  errors?: any;
}
export const FormInput: React.FunctionComponent<FormInputProps & InputProps> = forwardRef((props, ref) => {
  // const { hasMounted } = useFormContext();
  // console.log("has mounted once" + hasMounted);
  return (
    <React.Fragment>
      <Flex
        width="300px"
        minHeight="80px"
        mx="auto"
        my="205"
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
export const FormSubmit: React.FunctionComponent<FormSubmitProps & InputProps> = forwardRef(
  ({ children, loading, ...rest }, ref) => {
    // const { hasMounted } = useFormContext();

    return loading ? (
      <React.Fragment>
        <Flex mx="auto" className="form-submit" flexDirection="column">
          <FormLoader {...rest} />
        </Flex>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Flex mx="auto" className="form-submit" flexDirection="column">
          <Submit
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
          </Submit>
        </Flex>
      </React.Fragment>
    );
  }
);

export interface FormErrorProps {
  error?: any;
}
export const FormError: React.FunctionComponent<FormErrorProps & BoxProps> = forwardRef(
  ({ children, error, ...rest }, ref) => {
    // const { hasMounted } = useFormContext();

    return error ? (
      <React.Fragment>
        <Flex mx="auto">
          <Box
            ref={ref}
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
  }
);

export interface FormReceiptProps {
  receipt?: any;
}
export const Receipt: React.FunctionComponent<FormReceiptProps & BoxProps> = forwardRef(
  ({ children, receipt, ...rest }, ref) => {
    // const { hasMounted } = useFormContext();

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
            ref={ref}
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
            <Fragment>
              {json2String(receipt)}
              {children}
            </Fragment>
          </Box>
        </Flex>
      </React.Fragment>
    ) : (
      <React.Fragment></React.Fragment>
    );
  }
);

export interface ExplorerLinkProps {
  url?: string;
}
export const ExplorerLink: React.FunctionComponent<ExplorerLinkProps & BoxProps> = forwardRef(
  ({ ref, children, url, ...rest }) => {
    // const { hasMounted } = useFormContext();
    // console.log("has mounted" + url);
    return url ? (
      <React.Fragment>
        <Flex mx="auto">
          <Box
            width="266px"
            mx="auto"
            textAlign="center"
            fontSize="12px"
            ref={ref}
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
  }
);

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

export const Web3Form: IForm = {
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
  registerString:registerString,
};
export default Web3Form;
