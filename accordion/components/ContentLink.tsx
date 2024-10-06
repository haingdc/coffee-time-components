import React from "react";

interface ContentLinkProps extends React.PropsWithChildren {
  href: string;
}

const ContentLink: React.FC<ContentLinkProps> = ({ href, children }) => {
  return (
    <p>
      <a href={href}>{children}</a>
    </p>
  );
};

export default ContentLink;
