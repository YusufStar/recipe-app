import React from 'react'
import { useNavigate } from 'react-router-dom';

function FoodDetail({data, SetUsername}) {
  const navigate = useNavigate()

  function logout() {
    SetUsername("")
    navigate('/')
  }

  console.log(data);
  return (
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

      {/* Detail Content */}
      <div className="w-[750px] gap-3 h-[600px] flex flex-row items-center justify-center bg-blue-800/70 mt-[15%] mb-[15%] rounded-xl">
        <div className="w-[25%] ml-3 flex justify-center items-center h-[100%]">
          <ul className='flex w-[75%] h-[100%] text-white text-lg flex-col justify-center items-start'>
            <li>{data.recipe.totalNutrients.CA.label}: {Number(data.recipe.totalNutrients.CA.quantity).toFixed(3)}</li>
            <li>{data.recipe.totalNutrients.ENERC_KCAL.label}: {Number(data.recipe.totalNutrients.ENERC_KCAL.quantity).toFixed(3)}</li>
            <li>{data.recipe.totalNutrients.WATER.label}: {Number(data.recipe.totalNutrients.WATER.quantity).toFixed(3)}</li>
            <li>{data.recipe.totalNutrients.PROCNT.label}: {Number(data.recipe.totalNutrients.PROCNT.quantity).toFixed(3)}</li>
            <li>{data.recipe.totalNutrients.FAT.label}: {Number(data.recipe.totalNutrients.FAT.quantity).toFixed(3)}</li>
          </ul>
        </div>
          <img src={data.recipe.image} className="w-[300px] rounded-xl"/>
        <div className="w-[35%] mr-3 h-[90%] flex flex-col items-center justify-center">
          <ul className='text-lg text-white gap-3 flex flex-col h-[100%] items-start justify-center'>
          {data.recipe.ingredientLines.map((items, i) => (
              <li>{items}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail