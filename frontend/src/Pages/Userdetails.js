import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, Paper, OutlinedInput, InputLabel, FormControl, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import { City, Country, State } from "country-state-city";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config/global';



const StyledOutlinedInput = styled(OutlinedInput)({
    '& input::placeholder': {
        textAlign: 'center',
        lineHeight: '40px',
    },
    '& .MuiInputLabel-root': {
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const UserDetails = () => {

    const validator = require('validator');
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState("Please Select Country");
    const [selectedState, setSelectedState] = useState("Please Select State");
    const [selectedCity, setSelectedCity] = useState("Please Select District");

    const [alertMessage, setAlertMessage] = useState();
    useEffect(() => {
        const countries = Country.getAllCountries();
        setCountryData(countries);
        setSelectedCountry(countries[0]?.isoCode);
    }, []);

    const { id } = useParams();

    useEffect(() => {
        if (selectedCountry) {
            const states = State.getStatesOfCountry(selectedCountry);
            setStateData(states);
            setSelectedState(states[0]?.isoCode);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCountry && selectedState) {
            const cities = City.getCitiesOfState(selectedCountry, selectedState);
            setCityData(cities);
            setSelectedCity(cities[0]?.name);
        }
    }, [selectedCountry, selectedState]);
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        doorno: '',
        street: '',
        landmark: '', city: "", pincode: "", email: "", mobile: ""
    });

    const [address, setAddress] = useState({

    })

    useEffect(() => {
        const fetchData = async () => {
            let token = localStorage.getItem('token');

            if (!!token) {
                try {
                    const response = await axios.get(`${API_URL}/auth/users/${id}`);
                    const data = response.data.singleUser;
                    setUserData((prev) => ({
                        ...prev, ...data
                    }))
                } catch (error) {
                    console.error(error);
                }
            }


        };

        fetchData();
    }, [])

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const [openAlert, setOpenAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validator.isEmail(userData.email)) {
            setOpenAlert(true);
            setAlertMessage("Please Enter Valid Email!")
            return;
        }
        else if (!validator.isMobilePhone(String(userData?.mobile), 'en-IN')) {
            setOpenAlert(true);
            setAlertMessage("Please Enter Valid Mobile!")
            return;
        }
        else if (userData.firstName === "" || userData.firstName === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill First Name!")
            return;
        }
        else if (userData.lastName === "" || userData.lastName === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill Last Name!")
            return;
        }
        else if (userData.doorNo === "" || userData.lastName === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill Door No!")
            return;
        }
        else if (userData.street === "" || userData.street === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill Street!")
            return;
        }
        else if (userData.landmark === "" || userData.landmark === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill Landmark!")
            return;
        }
        else if (userData.city === "" || userData.city === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill City!")
            return;
        }
        else if (userData.pincode === "" || userData.pincode === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Fill Pincode!")
            return;
        } else if (selectedCountry === "" || selectedCountry === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Select Country!")
            return;
        }
        else if (selectedState === "" || selectedState === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Select State!")
            return;
        }
        else if (selectedCity === "" || selectedCity === undefined) {
            setOpenAlert(true);
            setAlertMessage("Please Select District!")
            return;
        }

        else {
            sendRequest()
        }


    };

    const sendRequest = async () => {
        try {

            const postData = {
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
                mobile: userData.mobile,
                doorno: userData.doorno,
                street: userData.street,
                landmark: userData.landmark,
                city: userData.city,
                district: selectedCity,
                state: selectedState,
                pincode: userData.pincode,
                country: selectedCountry,
            };

            console.log(postData);

            const response = await axios.put(`${API_URL}/auth/users/${id}`, postData);

            setOpenAlert(true);
            setAlertMessage("Data Updated Successfully");
        } catch (err) {
            console.log(err);
            // Handling error and showing alert message
            setOpenAlert(true);
            setAlertMessage("Something Went Wrong!");

        }
    };


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Paper elevation={3} style={{ padding: 20, maxWidth: 1000, margin: 'auto', marginTop: 50 }}>
                <Grid container spacing={2} sx={{ display: 'flex', color: 'darkgreen', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant="h5" gutterBottom>Personal Information</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" gutterBottom sx={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}><EditIcon />Edit</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <FormControl fullWidth variant="outlined">
                            <Typography>Email <b style={{ color: 'red' }}>*</b></Typography>
                            <OutlinedInput
                                id="email"
                                name="firstName"
                                value={userData.email}
                                onChange={
                                    (e) => {
                                        setUserData((prev) => ({
                                            ...prev, email: e.target.value
                                        }))

                                    }
                                }

                                style={{ height: '40px' }}
                                placeholder='email'
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <FormControl fullWidth variant="outlined">
                            <Typography>Mobile No <b style={{ color: 'red' }}>*</b></Typography>
                            <OutlinedInput
                                id="mobile"
                                name="mobile"
                                type='text'
                                value={userData.mobile}
                                onChange={
                                    (e) => {
                                        setUserData((prev) => ({
                                            ...prev, mobile: e.target.value
                                        }))

                                    }
                                }

                                style={{ height: '40px' }}
                                placeholder='Mobile'
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={2} sx={{ display: 'flex', color: 'darkgreen', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant="h5" gutterBottom>User Details</Typography>
                    </Grid>
                </Grid>


                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>First Name <b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="firstName"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleChange}

                                    style={{ height: '40px' }}
                                    placeholder='First Name'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>Last Name<b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="lastName"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleChange}

                                    style={{ height: '40px' }}
                                    placeholder='Last Name'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>Door No <b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="doorNo"
                                    name="doorNo"
                                    value={userData.doorNo}
                                    onChange={handleChange}

                                    style={{ height: '40px' }}
                                    placeholder='Door No'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>Street <b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="street"
                                    name="street"
                                    value={userData.street}
                                    onChange={handleChange}

                                    style={{ height: '40px' }}
                                    placeholder='Street'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>Landmark <b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="landmark"
                                    name="landmark"
                                    value={userData.landmark}
                                    onChange={handleChange}

                                    style={{ height: '40px' }}
                                    placeholder='Landmark'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>City <b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="city"
                                    name="city"
                                    value={userData.city}
                                    onChange={handleChange}
                                    placeholder='City'
                                    style={{ height: '40px' }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>Pincode <b style={{ color: 'red' }}>*</b></Typography>
                                <OutlinedInput
                                    id="pincode"
                                    name="pincode"
                                    value={userData.pincode}
                                    onChange={handleChange}

                                    style={{ height: '40px' }}
                                    placeholder='Pincode'
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                                <Typography>Country <b style={{ color: 'red' }}>*</b></Typography>
                                <Select
                                    id="country"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                marginTop: 'unset'
                                            }
                                        }
                                    }}
                                    style={{ height: '40px' }}
                                >
                                    {countryData.map((country) => (
                                        <MenuItem key={country.isoCode} value={country.isoCode}>
                                            {country.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        {selectedCountry && (
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Typography>State <b style={{ color: 'red' }}>*</b></Typography>
                                    <Select
                                        id="state"
                                        style={{ height: '40px' }}
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    marginTop: 'unset'
                                                }
                                            }
                                        }}
                                    >
                                        {stateData.map((state) => (
                                            <MenuItem key={state.isoCode} value={state.isoCode}>
                                                {state.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}
                        {selectedState && (
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <FormControl fullWidth variant="outlined">
                                    <Typography>District <b style={{ color: 'red' }}>*</b></Typography>

                                    <Select
                                        id="city"
                                        value={selectedCity}
                                        style={{ height: '40px' }}
                                        onChange={handleCityChange}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    marginTop: 'unset'
                                                }
                                            }
                                        }}
                                    >
                                        {cityData.map((city) => (
                                            <MenuItem key={city.name} value={city.name}>
                                                {city.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}
                    </Grid>
                    <Button type="submit" variant="contained" color="success" style={{ marginTop: 20 }}>
                        Submit
                    </Button>
                </form>
            </Paper>
            {/* <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={() => setOpenAlert(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenAlert(false)} severity="error">
                    Please fill in all details.
                </Alert>
            </Snackbar> */}

            <Dialog
                // fullWidth={true}
                maxWidth='sm'
                open={openAlert}
                onClose={() => setOpenAlert(false)}
            >
                {/* <DialogTitle>Optional sizes</DialogTitle> */}
                <DialogContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <ErrorOutlineIcon style={{ fontSize: '50px', color: 'red' }} />
                    <br />
                    <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>
                        {alertMessage}
                    </DialogContentText>


                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenAlert(false)} style={{ color: 'red' }}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UserDetails;
