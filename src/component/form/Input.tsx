import React from 'react';

interface PropTypes {
  height: string;
  width: string;
  type: string;
  value: string;
  onValuechange: React.Dispatch<React.SetStateAction<string>>;
  required: boolean;
  read_only: boolean;
}

const Input = (props: PropTypes) => {
  return (
    <input
      readOnly={props.read_only}
      type={props.type}
      required={props.required}
      value={props.value}
      onChange={e => props.onValuechange(e.target.value)}
      className={`${props.height ? props.height : 'h-12'} ${
        props.width ? props.width : 'w-full'
      } outline-none border-none py-1 px-3 rounded text-xs`}
    />
  );
};

export default Input;
