import { configureStore, createSlice } from "@reduxjs/toolkit";
const blogs = 
[{
    image : require('../images/img1.jpg'),
    title : "Home Office",
    author : "AMANDA GARRITY",
    date: 'Jun, 8 2021',
    desciption: "For most people, a cluttered workspace makes for a cluttered mind. Not only will having an organized desk look more inviting, but it'll motivate you to get to work, especially since you won't have to clear paper piles and junk out of your way to get the job done. Browse through these clever desk organization ideas to find simple yet highly effective ways to tidy up your workspace, whether it's in your home office, a small corner turned into your makeshift work space or a cubicle at your 9 to 5. With pegboard walls, DIY organizers and color-coordinated dividers, you can give all of your office supplies, documents and planning materials a designated spot, so you have exactly what you need at all times. With a few smart moves, you'll have an organized office that helps you.",
    more: "https://www.goodhousekeeping.com/home/organizing/g25576393/desk-organization-ideas/?slide=1"
  },
  {
    image : require('../images/img2.jpg'),
    title : "Responsive Web Design",
    author : "Ethan Marcotte",
    date: 'JMay 25, 2010',
    desciption: "A building’s foundation defines its footprint, which defines its frame, which shapes the facade. Each phase of the architectural process is more immutable, more unchanging than the last. Creative decisions quite literally shape a physical space, defining the way in which people move through its confines for decades or even centuries. Working on the web, however, is a wholly different matter. Our work is defined by its transience, often refined or replaced within a year or two. Inconsistent window widths, screen resolutions, user preferences, and our users installed fonts are but a few of the intangibles we negotiate when we publish our work, and over the years, we have become incredibly adept at doing so.",
    more: "https://alistapart.com/article/responsive-web-design/"
  },
  {
    image : require('../images/img1.jpg'),
    title : "Home Office",
    author : "AMANDA GARRITY",
    date: 'Jun, 8 2021',
    desciption: "For most people, a cluttered workspace makes for a cluttered mind. Not only will having an organized desk look more inviting, but it'll motivate you to get to work, especially since you won't have to clear paper piles and junk out of your way to get the job done. Browse through these clever desk organization ideas to find simple yet highly effective ways to tidy up your workspace, whether it's in your home office, a small corner turned into your makeshift work space or a cubicle at your 9 to 5. With pegboard walls, DIY organizers and color-coordinated dividers, you can give all of your office supplies, documents and planning materials a designated spot, so you have exactly what you need at all times. With a few smart moves, you'll have an organized office that helps you."
  },
  {
    image : require('../images/img1.jpg'),
    title : "Home Office",
    author : "AMANDA GARRITY",
    date: 'Jun, 8 2021',
    desciption: "For most people, a cluttered workspace makes for a cluttered mind. Not only will having an organized desk look more inviting, but it'll motivate you to get to work, especially since you won't have to clear paper piles and junk out of your way to get the job done. Browse through these clever desk organization ideas to find simple yet highly effective ways to tidy up your workspace, whether it's in your home office, a small corner turned into your makeshift work space or a cubicle at your 9 to 5. With pegboard walls, DIY organizers and color-coordinated dividers, you can give all of your office supplies, documents and planning materials a designated spot, so you have exactly what you need at all times. With a few smart moves, you'll have an organized office that helps you."
  },
  {
    image : require('../images/img1.jpg'),
    title : "Home Office",
    author : "AMANDA GARRITY",
    date: 'Jun, 8 2021',
    desciption: "For most people, a cluttered workspace makes for a cluttered mind. Not only will having an organized desk look more inviting, but it'll motivate you to get to work, especially since you won't have to clear paper piles and junk out of your way to get the job done. Browse through these clever desk organization ideas to find simple yet highly effective ways to tidy up your workspace, whether it's in your home office, a small corner turned into your makeshift work space or a cubicle at your 9 to 5. With pegboard walls, DIY organizers and color-coordinated dividers, you can give all of your office supplies, documents and planning materials a designated spot, so you have exactly what you need at all times. With a few smart moves, you'll have an organized office that helps you."
   },
];
const listSlice = createSlice({
    name: 'blogs',
    initialState: {blogs : blogs},
    reducers:{
       addBlog(state,action){
        state.blogs.push(action.payload);
       }
    }
})

export const actions = listSlice.actions
const store = configureStore({
    reducer: listSlice.reducer
})

export default store