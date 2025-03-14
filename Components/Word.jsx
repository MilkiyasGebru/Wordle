"use client"
import {useEffect, useState} from "react";

export default function Word({current, tries, character, color, index}){

    console.log(index)
    return (
        <div style={{ transitionDelay: `${150 * (index + 1)}ms` }} className={`border  p-4 w-full h-16 flex items-center justify-center  
           transition-colors
           
           ${ (color === "green" && tries > current) ? 'bg-green-500':''}
            
            ${ (color === "gold" && tries > current) ? 'bg-yellow-500':''}
            
            ${ (color === "gray" && tries > current) ? 'bg-[#787c7e]':''}
            
            ${ ( tries === current && character !== "" && character !== " ") ? 'border-gray-400 border-2':'border-gray-200'}

          
          `}>
            <span>{character}</span>
        </div>
    )
}