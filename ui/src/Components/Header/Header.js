import React from "react";
import { Text } from "rebass";
import PropTypes from "prop-types";

import Box from "../Box/Box";

const Header = (props) => (
  <Box
    p={20}
    mb={10}
    sx={{
      mx: "auto",
      px: 3,
      bg: "primary",
    }}
  >
    <Text color="white">{props.text}</Text>
  </Box>
);

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "",
};

export default Header;
