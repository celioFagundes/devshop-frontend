import Head from 'next/head'

const Seo = ({title = 'DevShop',description = 'Compre artigos eletrônicos agora'}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name ='description' content = {description}/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
  )
}

export default Seo