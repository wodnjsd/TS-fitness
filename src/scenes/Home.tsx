import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import React from 'react'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Homepage from '@/assets/homepage.jpg'
import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(mid-width:1060px)")

  return (
    <section id="home" className="gap-16 bg-black py-10 md:h-full md:pb-0">
      {/* image and header  */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div>
              <div className="text-6xl text-white uppercase font-bold">
                <h1 className="">Shape Your</h1>
                <h1 className="">Ideal Body</h1>

              </div>
            </div>
            <p className="mt-8 text-md text-gray-300">World class studios and trainers to help you shape and build your ideal body </p>

          </motion.div>

          <motion.div className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink className="text-sm font-bold text-white hover:text-salmon-20  "
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>

            </AnchorLink>
          </motion.div>

        </div>
        <div className="flex basis-4/5 justify-center md:z-10
        md:ml-40 md:mt-32 md:justify-items-end">
          <img alt="homepage" src={Homepage} />
        </div>

      </motion.div>

    </section>
  )
}

export default Home