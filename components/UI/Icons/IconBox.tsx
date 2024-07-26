import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props: { children: any, [x: string]: any }) {
    const { children, ...rest } = props;

    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"12px"}
            {...rest}
        >
            {children}
        </Flex>
    );
}