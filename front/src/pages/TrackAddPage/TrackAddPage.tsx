import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./components/ForgotPassword";
import {
    GoogleIcon,
    FacebookIcon,
    SitemarkIcon,
} from "./components/CustomIcons";
import { useState } from "react";
import { useFormik } from "formik";
import type { Track } from "./types";
import axios from "axios";


import { apiUrl } from "../../env";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
        maxWidth: "450px",
    },
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    ...theme.applyStyles("dark", {
        boxShadow:
            "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
    },
    "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        backgroundImage:
            "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {
            backgroundImage:
                "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
        }),
    },
}));

const LoginPage = () => {
    const [open, setOpen] = useState(false);

    const initValues: Track = {
    Title : "",
    Description: "",
    AudioFile: null,
    PosterUrl: "",
    ReleaseDate: new Date(),
    GenreId: ""
    };

 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (values: Track) => {
        const formData = new FormData();
        formData.append("Title", values.Title);
        formData.append("Description", values.Description);
        formData.append("PosterUrl", values.PosterUrl);
        formData.append("ReleaseDate", values.ReleaseDate.toISOString());
        formData.append("GenreId", values.GenreId);

    if (values.AudioFile) {
      formData.append("AudioFile", values.AudioFile); 
    }
        try {
            const response = await axios.post(
                `${apiUrl}/track`,
                formData
            );
            const { data } = response;

            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: handleSubmit,
    });

    return (
        <>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: "100%",
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        }}
                    >
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="Title">Title</FormLabel>
                            <TextField
                                id="Title"
                                type="text"
                                name="Title"
                                placeholder="Title"
                                autoComplete="name"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.Title}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="Description">Description</FormLabel>
                            <TextField
                                name="Description"
                                placeholder="Description"
                                type="text"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.Description}
                            />
                        </FormControl>
                         <FormControl>
                            <FormLabel htmlFor="AudioFile">AudioFile </FormLabel>
                            <TextField
                                name="AudioFile"
                                inputProps={{ accept: "audio/*" }}
                                type="file"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = event.currentTarget.files?.[0];
                                    formik.setFieldValue("AudioFile", file); 
    }}
                                
                            />
                        </FormControl>
                                                 <FormControl>
                            <FormLabel htmlFor="PosterUrl">PosterUrl</FormLabel>
                            <TextField
                                name="PosterUrl"
                                placeholder="PosterUrl"
                                type="text"
                                
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.PosterUrl}
                            />
                        </FormControl>
                         <FormControl>
                            <FormLabel htmlFor="ReleaseDate">ReleaseDate</FormLabel>
                            <TextField
                                name="ReleaseDate"
                                type="date"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                 value={formik.values.ReleaseDate.toISOString().split("T")[0]}
                                    onChange={(e) =>
                                    formik.setFieldValue("ReleaseDate", new Date(e.target.value))
                                    }
                            />
                        </FormControl>

                         <FormControl>
                            <FormLabel htmlFor="GenreId">GenreId </FormLabel>
                            <TextField
                                name="GenreId"
                                
                                type="text"
                                placeholder="GenreId"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                onChange={formik.handleChange}
                                value={formik.values.GenreId}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <ForgotPassword open={open} handleClose={handleClose} />
                        <Button type="submit" fullWidth variant="contained">
                            Add
                        </Button>
                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpen}
                            variant="body2"
                            sx={{ alignSelf: "center" }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>
                    <Divider>or</Divider>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert("Sign in with Google")}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert("Sign in with Facebook")}
                            startIcon={<FacebookIcon />}
                        >
                            Sign in with Facebook
                        </Button>
                        <Typography sx={{ textAlign: "center" }}>
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/material-ui/getting-started/templates/sign-in/"
                                variant="body2"
                                sx={{ alignSelf: "center" }}
                            >
                                Add
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </SignInContainer>
        </>
    );
};

export default LoginPage;
