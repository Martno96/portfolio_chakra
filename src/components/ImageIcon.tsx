import { Icon } from "@chakra-ui/react";

const ImageIcon = ({
  src,
  alt,
  boxSize = "2.7em",
  margin = "0.2em auto auto auto",
  ...rest
}: {
  src: string;
  alt: string;
  boxSize?: string;
  margin?: string;
  [x:string]: any;
}) => (
  <Icon
    filter="grayscale(1) brightness(60%) contrast(500%)"
    _dark={{
      filter: "invert(1) grayscale(1) brightness(400%) contrast(90%)",
    }}
    boxSize={boxSize}
    minW="44px"
    className="fa-fw"
    margin={margin}
    objectFit="cover"
    {...rest}
  >
    <img src={src} alt={alt} />
  </Icon>
);

export default ImageIcon;
