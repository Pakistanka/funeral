import React, { ChangeEvent, FC } from 'react';
import { OutlinedInput, InputLabel, FormHelperText, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export type TFormInput = {
  id: string;
  inputLabel: string;
  placeholder?: string;
  inputWidth?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: {message: string};
  value?: string;
}

export const StyledFormControl = styled(FormControl)(() => ({
  width: '100%',
  height: '40px',
  boxSizing: 'border-box',
  marginBottom: '22px',
  borderRadius: '2px',
  // fontFamily: 'inherit',
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#3B3B3B',
  },
  '& > .Mui-focused > .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #3B3B3B !important',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#808080',
    },
  },
  '& label': {
    textTransform: 'uppercase',
    fontSize: '0.625rem',
    marginTop: '4px',
    fontFamily: 'Noto Sans',
  },
  '& legend span': {
    textTransform: 'uppercase',
    fontSize: '0.465rem',
    fontFamily: 'Noto Sans',
  },
  '&:hover label': {
    color: '#808080',
  },
  '& .Mui-focused > .MuiOutlinedInput-notchedOutline': {
    border: '2px solid rgba(0, 134, 168, 1)',
  },
  '& input': {
    textOverflow: 'ellipsis',
    height: '20px',
    padding: '10px',

    fontSize: '0.875rem',
  },
}));

const FormInput:FC<TFormInput> = ({
  id,
  inputLabel,
  placeholder,
  inputWidth,
  required,
  onChange,
  error,
  value
}) => {
  return (
    <StyledFormControl
      sx={{width: inputWidth}}
      margin="none"
    >
      <InputLabel shrink htmlFor={id} error={error?.message ? true : false}>{inputLabel}</InputLabel>
      <OutlinedInput
        notched
        id={id}
        name={id}
        placeholder={placeholder}
        label={inputLabel}
        required={required ? true : false}
        onChange={onChange}
        error={error?.message ? true : false}
        value={value}
      />
      <FormHelperText id={id} error={error?.message ? true : false}>{error?.message}</FormHelperText>
    </StyledFormControl>
  )
}

export default FormInput;

