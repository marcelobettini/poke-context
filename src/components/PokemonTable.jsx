import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

function PokemonTable() {
    const { filter, data } = useContext(PokemonContext);
    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .filter(({ name: { english } }) =>
                            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
                        )
                        .slice(0, 8)
                        .map((pokemon) => (
                            <PokemonRow
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default PokemonTable;