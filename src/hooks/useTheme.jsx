import {useState} from 'react'

const useTheme = ({sharedTheme = "light"}) => {
    const [theme, setTheme] = useState(sharedTheme)

    const validateTheme = (value)=>{
        if(value === "dark"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
  return {
    theme,
    setTheme: validateTheme
  }
}

export default useTheme
