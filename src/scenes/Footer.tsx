import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-pink-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          JJ FITNESS
          <p className="my-5">fjdksla;fjksdal;fjkaj</p>
          <p> Copyright All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Maisbnn klfwoa hwkls</p>
          <p className="my-8-5">Maisbnn klfwoa hwkls</p>
          <p>Maisbnn klfwoa hwkls</p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Maisbnn klfwoa hwkls</p>
          <p>020 1234 5678</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer