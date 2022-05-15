import { Button, TableRow, TableCell } from "@mui/material"
import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PropTypes from "prop-types"
import PokemonType from "../pokemonType";

// onDetail es un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App).
const PokemonRow = ({ pokemon }) => {

    const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(", ")}</TableCell>
            <TableCell align="center">
                <Button variant="outlined" color="secondary" onClick={() => setSelectedPokemon(pokemon)}>info</Button>
            </TableCell>
        </TableRow>
    );
}
PokemonRow.PropTypes = {
    pokemon: PropTypes.arrayOf(PokemonType)
}

export default PokemonRow