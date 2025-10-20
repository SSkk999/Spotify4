
import { useDeleteGenresMutation, useGetGenresQuery } from "../../store/services/GenreApi/GenreApi";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/material";
import type { Genre } from "./types";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import {Renema} from "../../store/slices/idgenre"
import { Link } from "react-router";
import AddBoxIcon from '@mui/icons-material/AddBox';
const GanrePage = () => {

const {data,isLoading} = useGetGenresQuery(null);
const [deleteGenres] = useDeleteGenresMutation();
const dispatch = useDispatch();

    
const DeleteGenres = (g:string) =>
{

const  result = deleteGenres(g);
console.log(result);




}
    return(
        <>
        {isLoading ? (
            <LinearProgress color="secondary" />
         ):
        (
            <Box>
            {data?.payload.map((genre:Genre,index: number)=>(

                <Box key={genre.id} sx={{ display: 'flex', alignItems:"center",gap: 1,backgroundColor:"Beige",border: "solid Gray", padding:"23px"}}>
                <h2>{index+ 1}.</h2>
                <h3>{genre.name}</h3>
                <IconButton aria-label="delete" onClick={()=>
                    DeleteGenres(genre.id)} size="large" sx={{marginLeft:"auto"}}>
                <DeleteIcon fontSize="inherit" />
                </IconButton>
                 <Link to="/genrerenema">
                <IconButton onClick={()=>dispatch(Renema(genre.id))}  size="large" sx={{marginLeft:"-15px"}}>
                <EditIcon fontSize="inherit" />
                </IconButton>
                </Link>


                </Box>
  
                
                    
                
            ))}
            
           <Link to="/genreadd">
                <IconButton   size="large" >
                <AddBoxIcon fontSize="inherit" / >
                </IconButton>
            </Link>
             </Box>
             
        )}
        </>
         
    )
   

}


export default GanrePage;