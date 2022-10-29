import { Button, ButtonBase } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home({SetUsername, username, SetDetailData}) {
  const [meal, SetMeal] = useState("Breakfast")
  const [food, SetFood] = useState("")
  const [data, Setdata] = useState(null)
  const navigate = useNavigate()

  function logout() {
    SetUsername("")
    navigate('/')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(meal.length > 0) {
        getRecipe()
        SetFood("")
        console.log(data);
    } else {
      alert("please Select Meal")
    }
  }

  useEffect(() => {
    getRecipe()
  }, [])
  
  const getRecipe = async () => {
    const app_id = "df4bb795"
    const app_key = "9150654e5c5c0780326b3628f8b4e85d"
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${app_id}&app_key=${app_key}&mealType=${meal}`;
    await axios(url).then((res) => Setdata(res.data.hits));
  };

  return (
    <>
      {username.length > 0 ? (
        <div className='h-screen flex flex-col items-center'>
        {/* Navbar */}
        <div className="w-[100%] h-[60px] flex flex-row items-center">
          <h1 className='font-bold mr-auto text-4xl ml-3'><span className='text-red-800'>RE</span>CIPE</h1>
          <ul className='flex mr-3 text-xl gap-3'>
            <li className='cursor-pointer hover:text-red-800/70 transition-all duration-200'  onClick={() => navigate('/Home')}>Home</li>
            <li className='cursor-pointer hover:text-red-800/70 transition-all duration-200'  onClick={() => navigate('/About')}>About</li>
            <li className='cursor-pointer hover:text-red-800/70 transition-all duration-200' ><a href="https://github.com/YusufStar" target="_black">Github</a></li>
            <li className='cursor-pointer hover:text-red-800/70 transition-all duration-200'  onClick={() => logout()}>Logout</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-[90%] flex flex-col items-center overlf">
          <h1 className='font-thin text-red-800 text-4xl mt-5'>Food App</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-row gap-3 rounded-md mt-5">
            <label className='gap-2 flex flex-row items-center outline-none'>
              FoodName
              <input value={food} onChange={(e) => SetFood(e.target.value)} type="text" placeholder='Example: Pizza' className='outline-none border-b-[1px]'/>
            </label>
            <label className='gap-2 flex flex-row items-center outline-none'>
              MealType
              <select value={meal} onChange={(e) => SetMeal(e.target.value)} required className='bg-gray-800 outline-none p-1 flex flex-col items-center justify-center rounded-md text-white'>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>
              </select>
            </label>
            <Button type='submit' variant='contained'>Search</Button>
          </form>
        </div>
        <div className="h-[100%] w-[95%] mt-5 gap-5 grid grid-cols-5 overflow-y-scroll">
          {data?.map((food, i) => (
            <div key={i} className='flex flex-col items-center gap-5 h-[500px] shadow-xl bg-blue-200/20 rounded-lg'>
              <img src={food.recipe.image} className="w-[100%] rounded-t-lg" />
              <h1 className='text-lg'>{food.recipe.label}</h1>
              <Button onClick={() => {navigate('/Detail'); SetDetailData(food)}} variant='contained'>Detail</Button>
            </div>
          ))}
        </div>
      </div>
      ):null}
    </> 
  )
}

export default Home