import React from 'react';

const Button = (props: {
  title: string;
  on_click: React.MouseEventHandler;
  buttonBG: string;
  buttonHeight: string;
}) => {
  return (
    <button
      onClick={props.on_click}
      style={{
        backgroundColor: `${props.buttonBG}`,
        height: `${props.buttonHeight}`,
      }}
      className="text-white bg-blue-500 h-12 mt-5 rounded-md w-full md:w-[300px]"
    >
      {props.title}
    </button>
  );
};

export default Button;
