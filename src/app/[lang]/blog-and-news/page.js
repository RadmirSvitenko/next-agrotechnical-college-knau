import React from 'react'
import { getDictionary } from '../dictionaries'
import BlogAndNews from './component'

const Page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  return (
    <BlogAndNews dict={dict} />
  )
}

export default Page;
