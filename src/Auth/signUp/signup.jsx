import './signup.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SignUp() {
    return <section class="vh-100 bg-image"
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')", paddingTop: "20px" }}>
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style={{ borderRadius: "15px" }}>
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                <form>

                                    <div class="form-outline mb-4">

                                        <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}
                                        >
                                            <TextField fullWidth
                                                label="Your Name"
                                                id="fullWidth" />
                                        </Box>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}
                                        >
                                            <TextField fullWidth
                                                label="Your Email"
                                                id="fullWidth" />
                                        </Box>

                                    </div>

                                    <div class="form-outline mb-4">
                                        <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}
                                        >
                                            <TextField fullWidth
                                                label="Password"
                                                id="fullWidth"
                                                type={"password"}
                                            />
                                        </Box>
                                    </div>

                                    <div class="form-outline mb-4">

                                        <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}
                                        >
                                            <TextField fullWidth
                                                label="Repeat your password"
                                                id="fullWidth" />
                                        </Box>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                        <label class="form-check-label" for="form2Example3g">
                                            I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button type="button"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                                        class="fw-bold text-body"><u>Login here</u></a></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}