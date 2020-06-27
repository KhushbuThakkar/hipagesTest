import React, { useState } from "react";
import { Input } from "@rebass/forms";
import { Flex } from "rebass";
import { PropTypes } from "prop-types";
import Box from "../Box/Box";

const SearchBox = (props) => {
  const [searchText, setsearchText] = useState("");
  const onChange = (event) => {
    setsearchText(event.target.value);
    props.onSearch(searchText);
  };

  return (
    <Flex justifyContent="flex-end">
      <Box width={2 / 6}>
        {/* <Label htmlFor="campaigns">Search Campaigns</Label> */}
        <Input
          id="campaigns"
          name="campaigns"
          value={searchText}
          type="campaigns"
          placeholder="Enter Team Name"
          onChange={onChange}
          my={2}
          sx={{
            border: "none",
            borderBottom: "1px solid",
            borderColor: "primary",
            borderRadius: "0",
          }}
        />
      </Box>
    </Flex>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;
