"use client"
import React from 'react'
import {useState} from "react"
import SearchManufaturer from './SearchManufaturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SearchManufacturer from './SearchManufaturer'

const SearchButton = ({ otherClasses }: { otherClasses: string}) => { 
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        className="object-contain"
        width={40}
        height={40 } />
    </button>
  )
}

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  // handle the search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // check if the manufacturer and model are not empty
    if (manufacturer === '' && model === '') {
      alert('Please enter a manufacturer and model')
    } 

    // call a function to search for the car
    changeUrlParams(manufacturer.toLowerCase(), model.toLowerCase())
  }
  
  const changeUrlParams = (manufacturer: string, model: string) => {
    // Get the current URL params
    const urlParams = new URLSearchParams(window.location.search)
    // Set the new URL params
    if (model) {
      urlParams.set('model', model)
    } else {
      urlParams.delete('model')
    }

    if (manufacturer) {
      urlParams.set('manufacturer', manufacturer)
    } else {
      urlParams.delete('manufacturer')
    }
    // Generate the new URL
    const newPath = `${window.location.pathname}?${urlParams.toString()}`

    // Push the new URL to the router
    router.push(newPath)
    
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar
