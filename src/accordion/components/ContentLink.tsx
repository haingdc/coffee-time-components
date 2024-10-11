import React from "react";

interface ContentLinkProps extends React.PropsWithChildren {
  href: string;
}

const ContentLink: React.FC<ContentLinkProps> = ({ href, children }) => {
  return (
    <div>
      <a href={href}>{children}</a>
    </div>
  );
};

export default ContentLink;
