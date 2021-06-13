import React, { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}

    <style jsx>
      {`
                .footer-icon-list :global(a:not(:last-child)) {
                    @apply sm:mr-10 mr-5;
                }

                .footer-icon-list :global(a) {
                    @apply text-primary-100 flex items-center my-2;
                }

                .footer-icon-list :global(span) {
                    @apply sm:text-2xl text-xl font-bold not-italic font-roboto;
                }

                .footer-icon-list :global(svg) {
                    @apply fill-current sm:w-10 w-8 mr-2;
                }
            `}
    </style>
  </div>
);

export { FooterIconList };
