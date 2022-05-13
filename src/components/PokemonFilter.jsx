import PokemonContext from "../PokemonContext";
import { useContext } from "react";
import { TextField } from "@mui/material";

const PokemonFilter = () => {
    const { filter, setFilter } = useContext(PokemonContext)

    return < TextField
        sx={{ width: '20ch' }}
        label="Search..." variant="filled"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    />
}

export default PokemonFilter

