import React from 'react';

type ISnsNavigationProps = {
  snsIconSrc: string;
  appName: string;
  appLink: string;
};

const SnsNavigation = (props: ISnsNavigationProps) => (
  <a href={props.appLink || '#'} target="_blank" rel="noreferrer">
    <img src={props.snsIconSrc} alt="SnsIcon" />
    <span>{props.appName}</span>

    <style jsx>
      {`
                a {
                    @apply text-primary-100 flex items-center my-2;
                }

                span {
                    @apply sm:text-2xl text-base font-bold not-italic font-roboto;
                }

                img {
                    @apply sm:w-10 w-8 mr-2;
                    filter: invert(98%) sepia(13%) saturate(187%) hue-rotate(208deg)
                        brightness(117%) contrast(90%);
                }
            `}
    </style>
  </a>
);

export { SnsNavigation };
