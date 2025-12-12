import { HStack, IconButton, Link } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <HStack gap="4">
      <Link href="https://www.linkedin.com/in/martin-danielsson-frontend-developer/">
        <IconButton size="lg" variant="outline" maxW="fit-content">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconButton>
      </Link>
      <Link href="https://github.com/Martno96">
        <IconButton size="lg" variant="outline" maxW="fit-content">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </Link>
      <Link href="mailto:martin_danielsson@outlook.com">
        <IconButton size="lg" variant="outline" maxW="fit-content">
          <FontAwesomeIcon icon={faEnvelope} />
        </IconButton>
      </Link>
    </HStack>
  );
};

export default Contact;
