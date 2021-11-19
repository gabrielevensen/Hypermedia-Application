import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

const pagesInfo = {
  index: {
    title: 'Experts in Smart Logistics Solutions',
    subtitle: 'Logistics just became effortless...',
    image:
      'https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_960_720.jpg',
    subtitle1: '# Result Oriented',
    text1:
      'Our services helps you optimize the performance of your Supply Chain and decrease the carbon footprint',
    subtitle2: '# Teamwork',
    text2:
      'Thanks to our talented team of employees, we are now providing top class services all over the globe',
    subtitle3: '# Areas of Expertise',
    text3: 'Innovative areas get great results in the Smart Logistics field',
    subtitle4: '# Our Company',
    text4:
      '20 years of experience, 200 customers using our solutions which are located in 20 countries all over the world.',
  },
  about1: {
    el1: {
      title: 'Our history',
      image:
        'https://images.unsplash.com/photo-1468091730376-d3b5558b71ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80',
      text:
        'Founded in Milano -year 2001- by graduated students from Politecnico di Milano, Smart Solver has grown to be one of the leading global logistics technology company that offers end-to-end transportation management solutions. Our team of 9 employees are a dedicated group of experienced professionals and driven millennials. Our record has streched a lot during the last 20 years. At this moment we have more than 20 years of experience, 200 customers using our solutions and located in 20 countries all over the world.',
    },
    el2: {
      title: 'Big data analysis and smart solutions',
      image:
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      text:
        'Many of the logistic companies have the opportunity to collect tons of data from their regular operations. At Smart Solver we strive to turn big data into big value, we turn your data into an asset. Using data driven decision making and monotoring flows in the logistic chain, with pour expertise in the big data field you get the advantages over competative businsses on the market.',
    },
    el3: {
      title: 'Sustainability',
      image:
        'https://images.unsplash.com/photo-1610698553131-1f12a1615cc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      text:
        'As environmental challenges continue to climb up the latter of priorities for businesses, we foucus on helping our customers create a more sustainable supply chain network. Through digitalization and access to big data, Smart Solver plays an important role in reducing carbon emissions and promoting a more sustainable logistics processes. Whether it’s offsetting carbon emissions, covering ur business entire carbon footprint in order to make decisions about your environmental policies, or optimizing the design of network and sites to balance distance and cost, we can help you achieve your goals.',
    },
  },
}

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Area, People, Service } = db._tables
  // API to get all the areas
  app.get('/areas', async (req, res) => {
    const areas = await Area.findAll()
    return res.json(areas)
  })
  // API to get an area by ID.
  // This one will return also the people and services in an area
  app.get('/area/:id', async (req, res) => {
    const { id } = req.params
    const area = await Area.findOne({
      where: { id },
      include: [{ model: People }, { model: Service }], // -> this is the way we "include" also comments inside Articles
    })
    return res.json(area)
  })

  app.get('/people', async (req, res) => {
    const people = await People.findAll()
    return res.json(people)
  })

  app.get('/people/:id', async (req, res) => {
    const { id } = req.params
    const people = await People.findOne({
      where: { id },
      include: [{ model: Area }, { model: Service }], // -> this is the way we "include" also comments inside Articles
    })
    return res.json(people)
  })

  app.get('/service', async (req, res) => {
    const service = await Service.findAll()
    return res.json(service)
  })

  app.get('/service/:id', async (req, res) => {
    const { id } = req.params
    const service = await Service.findOne({
      where: { id },
      include: [{ model: Area }, { model: People }], // -> this is the way we "include" also comments inside Articles
    })
    return res.json(service)
  })

  // This one is just an example

  app.get('/static/:page', (req, res) => {
    const { page } = req.params
    return res.json({
      data: pagesInfo[page],
    })
  })
}

init()

export default app
