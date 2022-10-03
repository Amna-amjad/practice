
import './App.css';

import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { AppBar, Link, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import Theme from './components/Theme';

import Cards from './components/Cards';




function App() {
  const [listData, setListData] = useState([
    {
      id: 1,
      title:
        "Computers and Accessories, Laptops, TV & Video, Cell Phones , Photography",
      description: "The Ultimate Guide to Amazon Electronics",
      category: "electronics",
      image:
        "https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2019/05/28142626/amazon-electronics-homepage.png.png",
      rating: {
        rate: 4.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Household items ",
      description: "House Hold Electrical items.",
      category: "electronics",
      image:
        "https://visualdictionary.org/wp-content/uploads/2021/04/Home-Appliances-1.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Women Accessories",
      description: "get women accessories",
      category: "Accessories",
      image:
        "https://media.istockphoto.com/photos/woman-trendy-fashion-accessories-picture-id654407498?b=1&k=20&m=654407498&s=170667a&w=0&h=xix6Ui4qybZ62xn8nA6YtkGulBfCZrWu8RjQz3JFdMs=",
      rating: {
        rate: 3.7,
        count: 600,
      },
    },
    {
      id: 4,
      title: "Women Casual and Formal Footwear",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "women accessories",
      image:
        "https://c8.alamy.com/comp/2AGXA5G/colourful-ladies-sandals-for-sale-outside-shop-hoi-an-vietnam-2AGXA5G.jpg",
      rating: {
        rate: 4.1,
        count: 500,
      },
    },
    {
      id: 5,
      title: "Latest Women Dresses",
      description: "Latest dresses collection.",
      category: "Dresses",
      image:
        "https://www.beststylo.com/wp-content/uploads/2019/04/latest-Pakistani-dress-stitching-designs.jpg",
      rating: {
        rate: 4.8,
        count: 300,
      },
    },
    {
      id: 6,
      title: "Casual Dresses ",
      description: "Casual dress complete guide.",
      category: "Dresses",
      image:
        "https://outfittrends.b-cdn.net/wp-content/uploads/2021/06/womens-business-casual-attire-guide-ft-image-1024x819.png",
      rating: {
        rate: 4.9,
        count: 700,
      },
    },
    {
      id: 7,
      title: "Formal Dresses",
      description: "Formal Dresses Guide.",
      category: "Dresses",
      image: "https://i.ytimg.com/vi/eYSoOjSuEi8/maxresdefault.jpg",
      rating: {
        rate: 4.5,
        count: 600,
      },
    },
    {
      id: 8,
      title: "Party wears",
      description: "Party Wear Guide",
      category: "Dresses",
      image:
        "https://i.pinimg.com/736x/34/3e/04/343e04da37e4ec9d5a73de482e78d7d7.jpg",
      rating: {
        rate: 4.9,
        count: 300,
      },
    },
    {
      id: 9,
      title: "Men Wedding Wears ",
      description: "Men wedding Dresses Guide",
      category: "Men Dresses",
      image:
        "https://www.libasgallery.com/admin/upload/cat/Traditional-wedding-Sherwan.jpg",
      rating: {
        rate: 4,
        count: 300,
      },
    },
    {
      id: 10,
      title: "Men Casual Wear",
      description: "Men Casual Wear Guide .",
      category: "Men Dresses",
      image:
        "https://i.pinimg.com/236x/0f/9c/9f/0f9c9f7c5f669b5d9b45dc8cd26d6c2f.jpg",
      rating: {
        rate: 4.5,
        count: 260,
      },
    },
    {
      id: 11,
      title: "Men Casual Wear ",
      description: "Men Casual Wear Guide.",
      category: "Men Dresses",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNjkfcmRATlxhuKOWQTMuWh9d6rdCPdINQw&usqp=CAU",
        rating: {
          rate: 3.8,
          count: 400,
      },
    },
    {
      id: 12,
      title: "Men Formal Shirts",
      price: 114,
      description: "Men Formal Shirts",
      category: "Men Dresses",
      image:
      "https://qph.fs.quoracdn.net/main-qimg-ce94bdac20d3827cb3d59a2180ba2ec9.webp",
      rating: {
        rate: 3.8,
        count: 300,
      },
    },
  ]);
 
  

  const [allCategories, setAllCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [filterList, setFilterList] = useState([]);

  let getCategories = () => {
    let li = listData.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };


  let searchCategoryItem = (val) => {
    setSelectedCategory(val);
    let filteredList = listData.filter((x) => x.category === val);
    setFilterList([...filteredList]);
  };

  
  let searchItem = (val) => {
    let filteredList = listData.filter(
      (x) =>
        x.category === selectedCategory &&
        x.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterList([...filteredList]);
  };

  
  useEffect(() => {
    getCategories();
  }, []) ;
  return (
    <>
<Grid container>
        {filterList.map((e, i) => (
          <Grid item md={3} xs={12} sm={6} key={i}>
            <Box className="bgLight">
              <Chip label={e.category} />
              <img src={e.image} width="100%" alt="" />
              <Tooltip title={e.title}>
                <Typography
                  sx={{ height: 30, overflow: "hidden" }}
                  variant="h6"
                >
                  {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                </Typography>
              </Tooltip>
              <Typography variant="h5">Rs {e.price}/-</Typography>
              {/* <Typography variant="p">{e.description}</Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
      <hr />
      <Grid container>
        {listData.map((e, i) => (
          <Grid item md={3} xs={12} sm={6} key={i}>
            <Box className="bgLight">
              <img src={e.image} width="100%" alt="" />
              <Chip label={e.category} />
              <Tooltip title={e.title}>
                <Typography
                  sx={{ height: 30, overflow: "hidden" }}
                  variant="h5"
                >
                  {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                </Typography>
              </Tooltip>
            </Box>
          </Grid>
        ))}
      </Grid>
    
  
      <Theme/>
      
      <Cards term={filterList}/>
      
    </>
  );
}

export default App;
