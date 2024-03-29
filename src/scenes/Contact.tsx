import React from 'react'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import HeaderText from '@/shared/HeaderText'
import { triggerAsyncId } from 'async_hooks'


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full bg-black border-b-2 px-5 py-3 placeholder-white`

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }


  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">

      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} >
        <motion.div className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HeaderText>
            <span className="text-salmon-20">JOIN NOW</span> TO GET IN SHAPE
          </HeaderText>
          <p className="my-5 text-gray-300">
            Contact us for more information
          </p>

        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/5978315b28af2c756d5e40b8a75fe599"
              method="POST">
              <input className={inputStyles}
                type="text"
                placeholder="FULL NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })} />
              {errors.name && (
                <p className="mt-1 text-salmon-20">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length exceeded (100 char)"}

                </p>
              )}
              <input className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,


                })} />
              {errors.name && (
                <p className="mt-1 text-salmon-20">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "pattern" && "Invalid email address."}

                </p>
              )}
              <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,


                })} />
              {errors.name && (
                <p className="mt-1 text-salmon-20">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length exceeded (2000 char)"}

                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-sm bg-salmon-10 px-20 py-3 transition duration-500 hover:text-white hover:bg-salmon-20">
                SUBMIT
              </button>

            </form>

          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

export default ContactUs