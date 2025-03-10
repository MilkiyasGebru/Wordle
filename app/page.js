"use client"

import {useRef, useState, useEffect} from "react";
import Line from "@/Components/Line";

export default function Home() {

    const [tries, setTries] = useState(0);
    const inputRef = useRef(null);
    const [words, setWords] = useState(Array.from({length:5},()=>Array(5).fill(" ")));
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tries < 5 ){
            console.log(words[tries], " Checking")
            for (let i=0; i<5;i++){
                console.log(words[tries][i], "Hi");
                if (words[tries][i] === "" || words[tries][i] === ""){
                    return
                }

            }
            setTries(tries+1)
            setInputValue("")
        }
    }

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleChange = (e)=>{

        if (tries < 5 ){

            const updatedArray = [...words]

            for (let i=0; i < 5; i++){
                if (e.target.value.length > i ) {
                    console.log(updatedArray[tries], " new array")
                    updatedArray[tries][i] = e.target.value[i]
                }
                else{
                    updatedArray[tries][i] = ""
                }


            }
            e.target.value = updatedArray[tries].join("")
            setInputValue(updatedArray[tries].join(""))
            setWords(updatedArray);

        }

    }

    return (
        <div className="flex flex-col justify-center items-center w-full mx-auto mt-16 gap-4">

            {Array.from({length:5}, (_, index)=>(
                <Line key={index} word={words[index]} tries={tries} current={index}/>
            ))}

            <form onSubmit={handleSubmit} className="">
                <input className="bg-red-300 w-4 h-4" ref={inputRef} onSubmit={handleSubmit} onChange={handleChange} value={inputValue}/>
            </form>


        </div>


    );

}
