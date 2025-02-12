import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    ButtonGroup,
    IconButton,
    Flex,
} from "@chakra-ui/react";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";

export default function TableComponent({ header, data }: { header: string[], data: any[] }) {
    console.log(data);
    const color1 = "gray.400";
    const color2 = "gray.400";
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            mt="4"
            maxW="4xl"
            w="full"
        >
            <Table
                w="full"
                variant="striped"
                display={{
                    base: "block",
                    md: "table",
                }}
                sx={{
                    "@media print": {
                        display: "table",
                    },
                }}
            >
                <Thead
                    display={{
                        base: "none",
                        md: "table-header-group",
                    }}
                    sx={{
                        "@media print": {
                            display: "table-header-group",
                        },
                    }}
                >
                    <Tr>
                        {header.map((x) => (
                            <Th key={x}>{x}</Th>
                        ))}

                    </Tr>
                </Thead>
                <Tbody
                    display={{
                        base: "block",
                        lg: "table-row-group",
                    }}
                    sx={{
                        "@media print": {
                            display: "table-row-group",
                        },
                    }}
                >
                    {data.map((token, tid) => {
                        const { id, ...tokenData } = token; // Destructure to exclude id
                        return (
                            <Tr
                                key={tid}
                                display={{
                                    base: "grid",
                                    md: "table-row",
                                }}
                                sx={{
                                    "@media print": {
                                        display: "table-row",
                                    },
                                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                                    gridGap: "10px",
                                }}
                            >
                                {Object.keys(tokenData).map((x) => {
                                    return (
                                        <React.Fragment key={`${tid}${x}`}>
                                            <Td
                                                display={{
                                                    base: "table-cell",
                                                    md: "none",
                                                }}
                                                sx={{
                                                    "@media print": {
                                                        display: "none",
                                                    },
                                                    textTransform: "uppercase",
                                                    color: color1,
                                                    fontSize: "xs",
                                                    fontWeight: "bold",
                                                    letterSpacing: "wider",
                                                    fontFamily: "heading",
                                                }}
                                            >
                                                {x}
                                            </Td>
                                            <Td
                                                color={"gray.500"}
                                                fontSize="md"
                                                fontWeight="hairline"
                                            >
                                                {tokenData[x]}
                                            </Td>
                                        </React.Fragment>
                                    );
                                })}
                                <Td
                                    display={{
                                        base: "table-cell",
                                        md: "none",
                                    }}
                                    sx={{
                                        "@media print": {
                                            display: "none",
                                        },
                                        textTransform: "uppercase",
                                        color: color2,
                                        fontSize: "xs",
                                        fontWeight: "bold",
                                        letterSpacing: "wider",
                                        fontFamily: "heading",
                                    }}
                                >
                                    Actions
                                </Td>
                                <Td>
                                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                                        <Link href={`history/view/${id}`}>
                                            <IconButton
                                                colorScheme="blue"
                                                icon={<BsBoxArrowUpRight />}
                                                aria-label="Up"
                                            />
                                        </Link>
                                        <IconButton
                                            colorScheme="green"
                                            icon={<AiFillEdit />}
                                            aria-label="Edit"
                                        />
                                        <IconButton
                                            colorScheme="red"
                                            variant="outline"
                                            icon={<BsFillTrashFill />}
                                            aria-label="Delete"
                                        />
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Flex>
    );
}
