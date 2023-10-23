"use client";
import { useForm } from "react-hook-form";
import { any, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from "module";

const Register = () => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  //Enable disable submit button
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  //Validation schema
  const schema = z
    .object({
      firstname: z.string().min(3, "Firstname must be 3 characters or more."),
      lastname: z.string().min(3, "Lastname must be 3 characters or more."),
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(6, "Password must be at least 6 characters or more."),
      confirm: z
        .string()
        .min(6, "Password must be at least 6 characters or more."),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Password & Confirm Password do not match",
      path: ["confirm"],
    });

  type FormValue = z.infer<typeof schema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ resolver: zodResolver(schema) });

  //Submit the form
  const onFormSubmit = async (data: any) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setMsg(data.message);
      reset();
      //router.push("/signup");
    } else {
      const data = await response.json();
      setOpen(true);
      setMsg(data.message);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="sm" className="mb-10 scale-90">
        {msg &&
        msg ==
          "User already exists! Please try using a different email address." ? (
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>Error</AlertTitle>
              {msg}
            </Alert>
          </Collapse>
        ) : (
          ""
        )}

        {msg && msg == "User created successfully." ? (
          <Collapse in={open}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>Congratulations!</AlertTitle>
              {msg}
            </Alert>
          </Collapse>
        ) : (
          ""
        )}

        <Box
          className=" px-10 py-5 border-2 border-gray-100  rounded-md"
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onFormSubmit)}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={
                    errors.firstname?.message ===
                    "Firstname must be 3 characters or more."
                  }
                  helperText={errors.firstname?.message}
                  {...register("firstname")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  error={
                    errors.lastname?.message ===
                    "Lastname must be 3 characters or more."
                  }
                  helperText={errors.lastname?.message}
                  {...register("lastname")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  error={errors.email?.message === "Invalid email address"}
                  helperText={errors.email?.message}
                  {...register("email")}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  error={
                    errors.password?.message ===
                    "Password must be at least 6 characters or more."
                  }
                  helperText={errors.password?.message}
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Confirm password"
                  type="password"
                  id="ConfirmPassword"
                  error={
                    errors.confirm?.message ===
                      "Password & Confirm Password do not match" ||
                    errors.confirm?.message ===
                      "Password must be at least 6 characters or more."
                  }
                  helperText={errors.confirm?.message}
                  {...register("confirm")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label={
                    <Typography className="text-xs">
                      By clicking Agree & Join button, you agree to the
                      Bisnexplore User Agreement, Privacy Policy,
                      and Information requirements sheet in accordance with
                      FinVermV.
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              disabled={!isChecked}
              type="submit"
              fullWidth
              variant="contained"
              className="bg-blue-500"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
