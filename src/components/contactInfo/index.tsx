import React from "react";
import { ContactInfoComposition, ContactItemProps } from '@/lib/types';

const ContactInfo: React.FC<{ children: React.ReactNode }> & ContactInfoComposition = ({ children }) => {
  return <div>{children}</div>;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, link }) => {
  const content = (
    <p className="medium-text">
      <i className={`fa ${icon} fa-fw w3-margin-right w3-large w3-text-teal`}></i>
      {text}
    </p>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="medium-text">
      {content}
    </a>
  ) : (
    content
  );
};

ContactInfo.Item = ContactItem;

export default ContactInfo;
//Testando compound components pattern