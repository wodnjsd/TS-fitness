
import { SelectedPage } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"
import HeaderText from '@/shared/HeaderText';
import Benefit from './Benefit';
import swim from '@/assets/pool.jpg'

const benefits: Array<{ icon: JSX.Element, title: string, description: string, nums:number}> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: " types of machines",
    nums: 120

  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of Diverse Classes",
    description: " classes this week",
    nums: 158

  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: " elite trainers to help you",
    nums: 78

  },

]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {

  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20 bg-black" 
      id="benefits">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}  >
        <motion.div className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>MORE than just a gym</HeaderText>
          <p className="my-8 pb-8 sm:pb-0 text-gray-300">We provide world class equipment, trainers and classes to achieve your ultimate fitness goals with ease.</p>
        </motion.div>

        <motion.div className="md:flex items-center justify-between gap-8 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}>

          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              nums={benefit.nums}
              setSelectedPage={setSelectedPage} />
          ))}

        </motion.div>
      </motion.div>


    </section>
  )
}

export default Benefits