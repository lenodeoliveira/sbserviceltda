import { Base } from '../Base'
import Head from 'next/head'
import { GridTwoColumn } from '../../components/GridTwoColumn'
import { GridSection } from '../../components/GridSection'
// import { mockBase } from '../Base/mock'
// import { gridPartners, sectionGrid, sectionContent, sectionTwoColumns, menu } from '../../api/dados'

const logoData = {
  text: 'SB Serviços de Radiologia',
  link: '#',
  srcImage: '',
}

const links = [
  {
    children: 'Sobre nós',
    link: '#intro',
    newTab: false,
  },
  {
    children: 'Especialidades',
    link: '#especialidades',
    newTab: false,
  },
  {
    children: 'Parceiros',
    link: '#parceiros',
    newTab: false,
  },
  {
    children: 'Equipe',
    link: '#equipe',
    newTab: false,
  },
  {
    children: 'Contato',
    link: '#contato',
    newTab: false,
  },
]

const especialidades = {
  sectionId: 'especialidades',
  background: false,
  title: 'Especialidades',
  description: 'Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde',
  grid: [
    {
      title: 'Mamografia',
    },
    {
      title: 'Raio-X',
    },
    {
      title: 'Tomografia',
    },
    {
      title: 'Medicina do trabalho',
    },
  ],
}

const sobreNos = {
  sectionId: 'intro',
  title: 'SB Radiologia',
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore?`,
  srcImg: 'assets/images/raio-x.jpeg',
}

function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Base logoData={logoData} links={links}>
        <GridTwoColumn {...sobreNos} background />
        <GridSection {...especialidades} />
      </Base>
    </>
  )
}

export default Home
