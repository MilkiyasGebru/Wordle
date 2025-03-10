"use client"

import Word from "@/Components/Word";

export default function Line({current, tries, word}){
    // console.log(word,current,tries);
    const word_of_day = "OCEAN"
    const testCounts = {}
    for (let char of word){
        testCounts[char] = (testCounts[char] || 0) + 1;
    }
    const charCounts = {}
    for (let char of word_of_day){
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    const colors = Array.from({length:5}, ()=> "gray")

    for (let i = 0; i < 5; i++) {
        if (word[i] === word_of_day[i]){
            charCounts[word[i]] -= 1
            testCounts[word[i]] -= 1
            colors[i]="green"
        }
    }
    console.log(testCounts)
    console.log(charCounts)
    for (let i = 0; i < 5; i++) {

        if (word[i] !== word_of_day[i] && charCounts[word[i]] > 0){
            colors[i]="gold"
            charCounts[word[i]] -= 1
        }
    }

    console.log(colors," colors",current);
    return (
        <div className={`flex gap-4 w-[25%]   }`}>
            {Array.from({length:5},(_,index)=>(
                <Word key={index} current={current} tries={tries} character={word[index]} color={colors[index]} index={index}/>
            ))}
        </div>
    )
}