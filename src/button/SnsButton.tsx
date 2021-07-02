import React from 'react';

type IButtonProps = {
  btnColor: String;
  appLink: string;
  appName: String;
  snsIconSrc: string;
};

const SnsButton = (props: IButtonProps) => (
  <a
    href={props.appLink || '#'}
    className={`${props.btnColor || ''} w-full`}
    target="_blank"
    rel="noreferrer"
  >
    <img src={props.snsIconSrc} alt="snsIcon" />
    <div
      className={`text-lg lg:text-xl leading-tight absolute right-0 ${
        props.appName.length < 10 ? 'left-0' : 'left-8'
      }`}
    >
      {props.appName}
    </div>

    <style jsx>
      {`
                a {
                    @apply flex items-center py-4 rounded-3xl text-center font-roboto font-bold not-italic text-primary-100 relative mb-4 md:mb-6 mx-auto xs:mx-0;
                }
                img {
                    @apply ml-8;
                    filter: invert(98%) sepia(13%) saturate(187%) hue-rotate(208deg)
                        brightness(117%) contrast(90%);
                }
            `}
    </style>
  </a>
);

export { SnsButton };
