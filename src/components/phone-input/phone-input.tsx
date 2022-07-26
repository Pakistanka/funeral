import React, { ChangeEvent, FC } from 'react';
import InputMask from 'react-input-mask';
import { InputLabel, OutlinedInput, FormHelperText } from '@mui/material';
import { StyledFormControl } from '../form-input/form-input';

type TFormInput = {
  id: string;
  inputLabel: string;
  placeholder?: string;
  inputWidth?: string;
  required?: boolean;
  validationTemplate?: object;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: {message: string};
  value?: string;
  disabled?: boolean;
}

const PhoneInput: FC<TFormInput> = (props) => {

    return (
      <>
        <StyledFormControl>
          <InputLabel
            shrink
            htmlFor={props.id}
            error={props.error?.message ? true : false}
          >
            {props.inputLabel}
          </InputLabel>
          <InputMask
            mask="+7 (999) 999-99-99"
            value={props.value}
            name={props.id}
            onChange={props.onChange}
            disabled={props.disabled}
          >
            <OutlinedInput
              notched
              id="phone"
              placeholder={props.placeholder}
              label={props.inputLabel}
              required={true}
              error={props.error?.message ? true : false}
              disabled={props.disabled}
            />
          </InputMask>
          <FormHelperText
            id={props.id}
            error={props.error?.message ? true : false}
          >
            {props.error?.message}
          </FormHelperText>
        </StyledFormControl>
      </>
    );
  };

  export default PhoneInput;
