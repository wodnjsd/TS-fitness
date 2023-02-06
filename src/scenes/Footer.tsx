import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black py-16">
      <div className="justify-content mx-auto w-5/6 sm:flex border-t">
        <div className="pt-10 basis-1/2 md:mt-0 ">
           <h4 className="font-stardom">JW FITNESS</h4>
          <p className="my-2">Copyright All Rights Reserved</p>
        </div>
        <div className="pt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-2 text-sm">News</p>
          <p className="text-sm">Careers</p>
        </div>
        <div className="pt-10 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="text-sm my-2">020 1234 5678</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer