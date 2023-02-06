
import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  nums: number;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, nums, setSelectedPage }: Props) => {
  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-100 basis-1/4 py-16 text-center"
      variants={childVariant}>
      <div className="mb-4 flex justify-center">
        <div className="rounded-full  bg-salmon-10 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">
        {title}
      </h4>
      <p className="my-3">    
      <CountUp delay={5} end={nums} duration={3} />
        {description}</p>
      <AnchorLink className="text-sm font-bold text-gray-300 hover:text-salmon-20"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit