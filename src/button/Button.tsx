import React from 'react';

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
                    .btn {
                        @apply inline-block rounded-3xl text-center;
                    }

                    .btn-base {
                        @apply text-lg font-semibold py-2 px-4;
                    }

                    .btn-xl {
                        @apply font-extrabold text-xl py-4 px-5 w-full;
                    }

                    .btn-primary {
                        @apply text-primary-500 bg-gray-100;
                    }

                    .btn-primary:hover {
                        @apply bg-gray-300;
                    }
                `}
      </style>
    </div>
  );
};

export { Button };
