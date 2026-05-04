// 'use client'

// import { useEffect, useState } from 'react'

// export const useThemeToggler = () => {
//     const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

//     useEffect(() => {
//         const storedTheme = window.localStorage.getItem('theme') as
//             | 'light'
//             | 'dark'
//             | null
//         if (storedTheme) {
//             // eslint-disable-next-line react-hooks/set-state-in-effect
//             setTheme(storedTheme)
//             if (storedTheme === 'dark') {
//                 document.documentElement.classList.add('dark')
//             }
//         } else {
//             setTheme('light')
//         }
//     }, [])

//     useEffect(() => {
//         document.documentElement.classList.toggle('dark')
//         window.localStorage.setItem('theme', theme || 'light')
//     }, [theme])

//     const toggleTheme = () => {
//         const newTheme = theme === 'light' ? 'dark' : 'light'
//         setTheme(newTheme)
//     }

//     return { theme, toggleTheme }
// }
