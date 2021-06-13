import React, { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  iconList: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    <div className="flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-3 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
                .navbar :global(li) {
                    @apply mx-4;
                }
            `}
    </style>
  </div>
);

export { CenteredFooter };
