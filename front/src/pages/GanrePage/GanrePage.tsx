
import { useGetGenresQuery } from "../../store/services/GenreApi/GenreApi";
import LinearProgress from "@mui/material/LinearProgress";

import { Box } from "@mui/material";
import type { Genre } from "./types";
const GanrePage = () => {
const {data,isLoading} = useGetGenresQuery(null);
    return(
        <>
        {isLoading ? (
            <LinearProgress color="secondary" />
         ):
        (
            <Box>
            {data?.payload.map((genre:Genre,index: number)=>(

                <Box sx={{ display: 'flex', alignItems:"center",gap: 1,}}>
                <h2>{index+ 1}.</h2>
                <h3>{genre.name}</h3>
                
                </Box>
            
                    
                
            ))}
            </Box>
        )}
        </>
         
    )
   

}


export default GanrePage;