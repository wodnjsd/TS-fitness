import React from 'react'

type Props = {
  children: React.ReactNode
}

const HeaderText = ({ children }: Props) => {
  return (
    <h1 className="text-white basis-3/5 font-zodiak text-3xl font-bold">
      {children}
    </h1>
  )
}

export default HeaderText