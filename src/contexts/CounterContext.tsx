import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import produce from 'immer'

interface CounterProviderProps {
  children: ReactNode
}

interface Coffee {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
  counter: number
  image: string
  alt: string
}

interface CounterContextType {
  coffees: Coffee[]
  increment: (id: number) => void
  decrement: (id: number) => void
  total: number
  addToCart: () => void
}

export const CounterContext = createContext({} as CounterContextType)

export function CounterProvider({ children }: CounterProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [total, setTotal] = useState(0)

  async function fetchCoffees() {
    const response = await api.get<Coffee[]>('coffees')
    setCoffees(response.data)
  }

  useEffect(() => {
    fetchCoffees()
  }, [])

  function increment(id: number) {
    const coffeeIndex = coffees.findIndex((coffee) => {
      return coffee.id === id
    })

    setCoffees(
      produce(coffees, (draft) => {
        if (draft[coffeeIndex].counter < 99) {
          draft[coffeeIndex].counter += 1
        }
      }),
    )
  }

  function decrement(id: number) {
    const coffeeIndex = coffees.findIndex((coffee) => {
      return coffee.id === id
    })

    setCoffees(
      produce(coffees, (draft) => {
        if (draft[coffeeIndex].counter > 0) {
          draft[coffeeIndex].counter -= 1
        }
      }),
    )
  }

  function addToCart() {
    const sum = coffees.reduce((acc, coffee) => {
      return acc + coffee.counter
    }, 0)
    setTotal(sum)
  }

  return (
    <CounterContext.Provider
      value={{ coffees, increment, decrement, total, addToCart }}
    >
      {children}
    </CounterContext.Provider>
  )
}
