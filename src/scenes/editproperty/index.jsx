import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  TextArea,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Switch,
  InputLabel, Input, 
  CardMedia
} from '@mui/material';
import { mockProperties } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";




const Gallery = ({ images, handleImageUpload }) => (
  <div>
    {images?.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Image ${index + 1}`}
        style={{
          maxWidth: '100px',
          maxHeight: '100px',
          marginRight: '5px',
        }}
      />
    ))}
    <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
  </div>
);

const EditProperty = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const selectedProperty = mockProperties.find(
          (property) => property.propertyId == propertyId
        );

        if (selectedProperty) {
          setPropertyDetails((prevDetails) => ({
            ...prevDetails,
            ...selectedProperty,
            availableRooms: selectedProperty.availableRooms || 0,
            totalRooms: selectedProperty.totalRooms || 0,
            id: propertyId,
          }));
        } else {
          console.error('Property not found:', propertyId);
        }
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchData();
  }, [propertyId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Updated property details:', propertyDetails);
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };


  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );


    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      images: [...(prevDetails.images || []), ...uploadedImages],
    }));
  };
  const handleRoomManagementClick = () => {
    navigate(`/roommanagement/${propertyDetails.id}`);
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={handleBack}>
            Go Back
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
          <CardMedia
              component="img"
              height="400"
              width="200"
              alt="Property Image"
              src={propertyDetails.imgUrl} // Assuming `imgUrl` is the property image URL
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Edit Property
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Property Name"
                      fullWidth
                      variant="outlined"
                      value={propertyDetails.title || ''}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          name: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Property Category"
                      fullWidth
                      variant="outlined"
                      value={propertyDetails.category || ''}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          category: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Property Description"
                      fullWidth
                      multiline
                      rows={2}
                      maxRows={4}
                      variant="outlined"
                      value={propertyDetails.category || ''}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          category: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="secondary" onClick={handleRoomManagementClick}>
                      Go to Rooms Management
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                  <Typography>
                  Available Rooms
                 </Typography>
                    <TextField
                      fullWidth
                      type="number"
                      variant="outlined"
                      value={propertyDetails.availableRooms}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          availableRooms: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                 <Typography>
                  Total Rooms
                 </Typography>
                    <TextField
                      
                      fullWidth
                      type="number"
                      variant="outlined"
                      value={propertyDetails.totalRooms}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          totalRooms: e.target.value,
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Is Active:</Typography>
                    <Switch
                      checked={propertyDetails.isActive || false}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          isActive: e.target.checked,
                        })
                      }

                      color='secondary'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Featured:</Typography>
                    <Switch
                      checked={propertyDetails.isFeatured || false}
                      onChange={(e) =>
                        setPropertyDetails({
                          ...propertyDetails,
                          isFeatured: e.target.checked,
                        })
                      }
                      color='secondary'
                    />
                  </Grid>

                  
                  <Grid item xs={12}>
                    <Gallery
                      images={propertyDetails.images}
                      handleImageUpload={handleImageUpload}
                    />
                  </Grid>

        
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="secondary">
                      Save Changes
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

export default EditProperty;
