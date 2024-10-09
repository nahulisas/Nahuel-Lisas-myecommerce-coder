import { Box } from "@mui/material";

const ItemListContainer = ({ greeting }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <h2>{greeting}</h2>
        </Box>
    );
};

export default ItemListContainer;
