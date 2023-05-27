import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { productsItemsData } from '../languageData/ProductsItemsData'

import "./productsItem.css"

import { GrClose } from 'react-icons/gr'

export default function ProductsItem({lang}) {
    const location = useLocation()

    const [openModal, setOpenModal] = useState(false)

    const name = location.state.productName

    console.log("PRODUUCT ITEM DATA IS");

    const productData = productsItemsData[lang][name]

    console.log(productsItemsData[lang][name]);

    // console.log(name);
    
    // console.log(location);
    // console.log(location.state.productName);
    // const { productName } = location.state  
  return (
    <div>

        {
            openModal ?
            // bg-[rgba(200,200,200)]
                <div  className='bg-[#00000043] w-[100vw] z-20 h-[100vh] fixed'>
                    <div className='w-[100%] h-[100vh] flex justify-center items-center '>
                        <img className='h-[70%] rounded-2xl ' src={productData.image}/>
                        <div className='relative h-[500px]'>
                            <GrClose className='text-[40px] text-white cursor-pointer' onClick={() => setOpenModal(false)}/>
                        </div>
                    </div>
                </div>
            :""
        }

        <div className='container pt-24'>
            
            <div className='grid md:grid-cols-2 items-center grid-cols-1 ' >
                <div className='flex justify-center items-center'>
                    {/* md:h-1/2 h-[70%] */}
                    <img className='w-[70%]' src={productData.image} alt="" onClick={() => setOpenModal(true)}/>
                </div>
                <div>
                    <h2 className='md:text-[40px] text-[25px] mb-4'>{name}</h2>
                    <p>{productData.text}</p>
                </div>
            </div>

            <h1 className='text-[30px] mb-6 font-semibold'>{ lang == 'ru' ? "Основные характеристики" : "Asosiy xususiyatlar"}</h1>

            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-3 pl-8 md:pl-0'>
                {
                    productData.list.map((item, index)=> {
                        return <li key={index} className='product_list_item'>
                            {item}
                        </li>
                    })
                }
            </div>

            <h1 className='text-[30px] mt-10 mb-6 font-semibold'>{ lang == 'ru' ? "Технические характеристики" : "Texnik xususiyatlar"}</h1>

            <div className='my-8'>
                {
                    productData.table.map((item, index)=> {
                        return <div className='grid grid-cols-2 product_table_item gap-x-2'>
                            <p>{item.name}</p>
                            <p>{item.item}</p>
                        </div>
                    })
                }
            </div>
        </div>

        
    </div>
  )
}
