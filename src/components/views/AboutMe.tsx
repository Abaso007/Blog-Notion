'use client'
import { motion } from 'framer-motion'
import { Avatar } from "@nextui-org/react"

export const AboutMe = () => {
  return (
        <div className="mb-5 mt-20 flex text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.8 }}
          variants={{
            hidden: {
              opacity: 0.25,
              y: 50
            },
            visible: {
              opacity: 1,
              y: 0
            },
          }}
        >
          <Avatar src="./mintnoii.jpg" className='w-20 h-20 rounded-md mr-4 ml-2'/>
        </motion.div>
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: {
                opacity: 0.25,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-lg font-semibold text-neutral-800 dark:text-gray-300"
          >
            Mintnoii
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8 }}
            variants={{
              hidden: {
                opacity: 0.25,
                y: 52,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-sm text-gray-600 dark:text-neutral-400"
          >
            Front-end Engineer from Shanghai, China
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.8 }}
            variants={{
              hidden: {
                opacity: 0.25,
                y: 55,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-sm text-gray-500 dark:text-neutral-500"
          >
            mintnoiiqing@gmail.com
          </motion.div>
        </div>
      </div>
  )
}