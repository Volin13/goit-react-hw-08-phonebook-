import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';

const switchImages = name => {
  switch (name) {
    case 'name':
      return <UserIcon />;
    case 'email':
      return <MailIcon />;
    default:
      return;
  }
};

export default switchImages;
