import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{ title }</title>
      <meta name='description' content={ description } />
      <meta name='keyword' content={ keywords } />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'شغل الخرز',
  description: 'متجر لبيع المنتجات المصنوعة يدويا من الخرز',
  keywords: 'أعمال من خرز, فوانيس خرز, شغل خرز',
}

export default Meta