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
            `}
    </style>
  </div>
);

export { FooterIconList };
