"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Register = () => {
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
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ resolver: zodResolver(schema) });

  const onFormSubmit = (data: any) => {
    alert(data);
  };

  return (
    <div>
      <Container component="main" maxWidth="sm" className="mb-10 scale-90">
        <Box
          className=" px-10 py-5 border-2 border-gray-100  rounded-md"
          sx={{
            marginTop: 8,
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
                    <Checkbox value="allowExtraEmails" color="primary" />
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
              type="submit"
              fullWidth
              variant="contained"
              className="bg-blue-500"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
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
