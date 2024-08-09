'use client'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { MdComputer, MdDarkMode, MdLightMode } from 'react-icons/md'
import { create } from 'zustand'
import { SimpleDialog } from './simple-dialog'

export type ThemeType = 'light' | 'dark'
export type ThemeModeType = ThemeType | 'system'

const getThemeState = () => {
  let themeMode: ThemeModeType = 'light'
  let theme: ThemeType = 'light'
  if (typeof window === 'undefined') {
    return { themeMode, theme }
  }
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    themeMode = 'dark'
    theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    themeMode = 'light'
    theme = 'light'
  }
  if (!('theme' in localStorage)) themeMode = 'system'
  return { themeMode, theme }
}

export const useThemeState = create<{
  themeMode: ThemeModeType
  theme: ThemeType
  setThemeMode: (themeMode: ThemeModeType) => void
  setTheme: (theme: ThemeType) => void
}>((set) => ({
  ...getThemeState(),
  setThemeMode: (themeMode: ThemeModeType) => set(() => ({ themeMode })),
  setTheme: (theme: ThemeType) => set(() => ({ theme })),
}))

const Icons = {
  light: <MdLightMode />,
  dark: <MdDarkMode />,
  system: <MdComputer />,
}

export function ThemeMode() {
  const ts = useThemeState()
  const onChangeTheme = () => {
    const { theme, themeMode } = getThemeState()
    ts.setTheme(theme)
    ts.setThemeMode(themeMode)
  }
  useEffect(() => {
    onChangeTheme()
  }, [])
  const onClick = (item: string) => {
    if (item == 'System') {
      localStorage.removeItem('theme')
    } else {
      localStorage.theme = item.toLocaleLowerCase()
    }
    onChangeTheme()
  }
  return (
    <SimpleDialog
      className='max-w-[200px] py-10 flex flex-col text-base text-stone-500 dark:text-white'
      trigger={<div className='text-xl'>{Icons[ts.theme as 'light' | 'dark' | 'system']}</div>}
    >
      {['Light', 'Dark', 'System'].map((item, index) => (
        <div
          key={'theme_mode_' + item}
          className={cn('flex px-5 items-center py-2 gap-3 cursor-pointer', {
            'bg-stone-100 dark:bg-zinc-700': item.toLowerCase() == ts.themeMode,
          })}
          onClick={() => onClick(item)}
        >
          <div className='text-2xl'>{Icons[item.toLowerCase() as 'light' | 'dark' | 'system']}</div>
          <span className=''>{item}</span>
        </div>
      ))}
    </SimpleDialog>
  )
}
