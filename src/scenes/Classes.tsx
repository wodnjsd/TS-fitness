import { useState } from 'react'
import { SelectedPage, ClassType } from '@/shared/types'
import { motion } from 'framer-motion'
import HeaderText from '@/shared/HeaderText'
import Class from '@/scenes/Class'
import core from '@/assets/core.jpg'
import pilates from '@/assets/pilates.jpg'
import swim from '@/assets/swim.jpg'
import weights from '@/assets/weights.jpg'
import dance from '@/assets/dance.jpg'
import trainer from '@/assets/trainer.jpg'

const classes: Array<ClassType> = [
  {
    name: "Weight Training",
    description: "fjsaklsa",
    image: weights
  },
  {
    name: "Reformer Pilates",
    description: "fjsaklsa",
    image: pilates
  },
  {
    name: "Swimming",
    description: "fjsaklsa",
    image: swim
  },
  {
    name: "Dance",
    description: "fjsaklsa",
    image: dance
  },
  {
    name: "Core & Balance",
    description: "fjsaklsa",
    image: core
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}


const Classes = ({ setSelectedPage }: Props) => {

  return (
    <section id="classes" className="w-full bg-black py-36">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>

          <div className="md:w-3/5">
            <HeaderText>OUR CLASSES</HeaderText>
            <p className="py-5 text-gray-300">
             Here are some of the classes we offer
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[3000px] whitepsace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          

          </ul>

        </div>
      </motion.div>

    </section>
  )
}

export default Classes