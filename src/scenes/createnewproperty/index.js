import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Card, CardContent, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateNewProperty = () => {
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState({
    id: '', // You might generate a unique ID or leave it blank based on your requirements
    name: '',
    category: '',
    isActive: false,
    isFeatured: false,
    location: '',
    images: [], // Array to store uploaded image URLs
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., save the new property to your data source
    console.log('New property details:', propertyDetails);
    // After creating the new property, you might want to navigate back to the property list or perform other actions
    navigate('/properties');
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files).map((file) => URL.createObjectURL(file));

    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      images: [...prevDetails.images, ...uploadedImages],
    }));
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleBack}>
            Go Back
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Create New Property
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Property Name"
                      fullWidth
                      variant="outlined"
                      value={propertyDetails.name}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Property Category"
                      fullWidth
                      variant="outlined"
                      value={propertyDetails.category}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, category: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Switch
                      checked={propertyDetails.isActive}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, isActive: e.target.checked })}
                      color="primary"
                    />
                    <Typography>Active Status</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Switch
                      checked={propertyDetails.isFeatured}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, isFeatured: e.target.checked })}
                      color="primary"
                    />
                    <Typography>Featured</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Location"
                      fullWidth
                      variant="outlined"
                      value={propertyDetails.location}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, location: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      {propertyDetails.images?.map((imageUrl, index) => (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={`Image ${index + 1}`}
                          style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '5px' }}
                        />
                      ))}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Create Property
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateNewProperty;
