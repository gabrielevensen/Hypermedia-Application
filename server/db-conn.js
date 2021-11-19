const { Sequelize, DataTypes } = require('sequelize')

// Development

// Juan postgres db
// const db = new Sequelize('postgres://postgres:admin@localhost:5433/hyp_DB')

// Gabriel postgres db
// const db = new Sequelize('postgres://postgres:Jagniosex1996@localhost:5433/db')

// Production
const pg = require('pg')
pg.defaults.ssl = true
const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Area = db.define(
    'area',
    {
      name: DataTypes.STRING,
      objective: DataTypes.TEXT,
      summary: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  const Service = db.define(
    'service',
    {
      title: DataTypes.STRING,
      presentation: DataTypes.TEXT,
      preview: DataTypes.TEXT,
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      underscored: true,
    }
  )

  const People = db.define(
    'people',
    {
      name: DataTypes.TEXT,
      position: DataTypes.TEXT,
      content: DataTypes.TEXT,
      preview: DataTypes.TEXT,
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      underscored: true,
    }
  )

  Area.hasMany(People, { foreignKey: 'area_id' })
  People.belongsTo(Area)
  People.hasOne(Service, { sourceKey: 'id', foreignKey: 'people_id' })
  Service.belongsTo(People)
  Area.hasMany(Service, { foreignKey: 'area_id' })
  Service.belongsTo(Area)

  db._tables = {
    Area,
    People,
    Service,
  }
}

async function insertFakeData() {
  const { Area, People, Service } = db._tables

  const firstArea = await Area.create({
    name: 'Intelligent Logistics',
    objective:
      'We help you to increase the efficiency of all your key areas by smart IT implementations',
    summary:
      'Adapt faster to new market needs. Our experts design, implement and manage flexible storage, transport and distribution solutions that are tailored to your needs. They analyze the entire supply chain to arrive at the best implementations.',
    image: 'https://miro.medium.com/max/1440/1*40PqWPvRjjw239tcxR0chg.jpeg',
  })

  const secondArea = await Area.create({
    name: 'Integrated supply chain',
    objective: 'Oversees the entire supply chain and its operation',
    summary:
      'The global distribution chain is a complex machinery. With the expertise of our brilliant experts this becomes easy for your business to scale into a global market. Gain total insight into our overall logistics cost management that helps you minimize costs through continuous analysis of changing market requirements, uncertain volumes and new trends in supply chain management.',
    image:
      'https://www.impresasanita.it/ir/27420/t/f/0/770/433//smart_industry.jpg',
  })

  const thirdArea = await Area.create({
    name: 'Sustainable Logistics',
    objective:
      'Our goal is to provide key solutions to lower your company carbon footprint',
    summary:
      'Identification and monitoring of carbon dioxide emissions provides valuable information about the environmental impact of transport and logistics operations, based on which you can set goals you can achieve.',
    image:
      'https://cdn.pixabay.com/photo/2020/09/21/23/27/leaves-5591446__340.jpg',
  })

  const person1 = await People.create({
    name: 'Hugo First',
    position: 'STRATEGY CONSULTANT',
    preview:
      'In charge of Transportation & Storage Tracking and specialist in strategy',
    content:
      'Spent 7 years as operation chief at Amazon Hub in Arizona. Master degree from Politecnico di Milano in Logistic and Transportation management.',
    image:
      'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxmYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  })
  const person2 = await People.create({
    name: 'Fran G. Pani',
    position: 'IT - ASSISTANT',
    preview:
      'In charge of Warehouse System Optimization and expert in IT Systems',
    content:
      'Three years experience from Budbee where I worked as IT chief of Logistic department. Master degree in Indutrial Economy at Chalmers university in Gothenbourg, Sweden.',
    image:
      'https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  })
  const person3 = await People.create({
    name: 'Anne Thurium',
    position: 'DISTRIBUTION ANALYST',
    preview:
      'In charge of Distribution IT implementations and specialized in analytics',
    content:
      '15 years experience in the logistics department of Ikea in Sweden, Älmhult. I enjoy each project related with distribution because I can help our customers with different skills related with analytics in the field of distribution and find great IT solutions for them',
    image:
      'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg',
  })

  const person4 = await People.create({
    name: 'Rose Bush',
    position: 'FOOD LOGISTICS ANALYST',
    preview:
      'In charge of Food Logistic Services and specialized in integrated food systems',
    content:
      'Masters degree in System Development at Uppsala university in Uppsala Sweden. I have been working at Smart Logistics field since I have graduated five years ago. I really enjoy to understand the issues of our customers and help them with our knowledge providing also a huge benchmark in the best practices for improving food logistics process with redesign of flows and with measurement in the key components',
    image:
      'https://images.unsplash.com/photo-1548142542-c53707f8b05b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
  })

  const person5 = await People.create({
    name: 'Ray O’Sun',
    position: 'INDUSTRIAL ANALYST',
    preview:
      'In charge of Industrial Cargo Logistics and specialist in industrial processes',
    content:
      '8 years of experience working at Vestas Wind System in Denmark. I graduated at Politecnico Di Milano 10 years ago and recivied a Master degree in Industrial Management.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  })
  const person6 = await People.create({
    name: 'Minnie Van Ryder',
    position: 'OUTSOURCING SPECIALIST',
    preview:
      'In charge of Third Party Logistic and specialized in outsourcing projects',
    content:
      'Masters degree in System Development at Uppsala university in Uppsala Sweden. I have been working at Smart Solver since the company was founded. I really appreciate to provide my vision of the outsource processes and boost our customers with my expertise in this field',
    image:
      'https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  })
  const person7 = await People.create({
    name: 'Joe V. Awl',
    position: 'FOOTPRINT CONSULTANT',
    preview:
      'In charge of Carbon Footprint Report and specialized in Sustainability',
    content:
      'Spent 3 years at Harvard University doing research on carbon footprint modelling. Before that I did a double degree at politecnico di Milano in System development and Sustainable Development.',
    image:
      'https://images.unsplash.com/photo-1619380916644-8dbef3724106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  })
  const person8 = await People.create({
    name: 'Peter Owt',
    position: 'ML EXPERT - SUSTAINABILITY',
    preview:
      'In charge of Optimization of Carbon Footprint and Specialized in analytics for logistics',
    content:
      '8 years of experience creating models for optimization of carbon emissions, expert in data analytics and machine learning ',
    image:
      'https://images.unsplash.com/photo-1595072009202-c062e4ac61ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80',
  })
  const person9 = await People.create({
    name: 'Ben Dover',
    position: 'SUSTAINABILITY SPECIALIST',
    preview:
      'In charge of Offset Carbon Footprint and Specialized in Sustainable Logistics',
    content:
      'I have been working at Smart Solver since 2015. My experience in the reduction of carbon emission in the logistics and transportation industry comes from 5 years of reasearch at Massachusetts Institute of Technology.',
    image:
      'https://images.unsplash.com/photo-1545696968-1a5245650b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80',
  })

  const service1 = await Service.create({
    title: 'Transportation & Storage Tracking',
    preview:
      'A complete transport and storage solution service with a high level of tracking and sensing',
    presentation:
      'A complete solution for transport and storage based on implementations that allows our customers to get a high level of tracking during the different steps of their operations.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-LxLeZsEMC8m_NPdzQnHtBU9neJm3d-IJg&usqp=CAU',
  })
  const service2 = await Service.create({
    title: 'Warehouse System Optimization',
    preview:
      'A solution to those warehouses which should be optimized in order to get higher benefits',
    presentation:
      'A complete solution for warehouses by implementing systems to check the level of occupancy in the different areas and improving the allocation of the different materials.',
    image:
      'https://cdn.pixabay.com/photo/2015/07/08/03/13/forklift-835340_960_720.jpg',
  })

  const service3 = await Service.create({
    title: 'Distribution IT implementations',
    preview:
      'Boost your distribution in the last mile with our IT implementations',
    presentation:
      'Improve the level of technology in the last mile distribution by implementing dron systems to deliver your packages. We have a high level of seniority in these kind of implementations with different kinds of materials and supply chain operations.',
    image:
      'https://cdn.pixabay.com/photo/2017/10/04/13/35/drone-2816244__480.jpg',
  })

  const service4 = await Service.create({
    title: 'Food Logistic Services',
    preview:
      'We deliver expertise in food logistic services from farmer to consumer',
    presentation:
      'Transportation of food is a delicate process. We can offer a trustworthy transporatation solution and ensure the highest safty measures in order to transport food over long distances, improving the quality of the packagings, analyzing the processes of your chain and getting relevant information to improve the efficiency of your whole operations. All of these based on Big data Analytics, IT sensing, among other tools.',
    image:
      'https://www.prs-refrigeration.com/_cms/repository/large/93-foodlogistic-header.jpg',
  })

  const service5 = await Service.create({
    title: 'Industrial Cargo Logistic',
    preview:
      'If you lack expertise of transporting bulky cargo, we help you out',
    presentation:
      'This service is perfect for projects with several suppliers and the quality of the execution is ensured by years of research and analysis based on these kinds of activities. We can help any kind of organization to improve their bulky cargo operations.',
    image:
      'https://www.nyteknik.se/ponIltIpIv-1581695320/tekniknyheter/5zzd7u-129c022e-6d6f-4854-af67-99b5939d2408/binary/original/129c022e-6d6f-4854-af67-99b5939d2408',
  })

  const service6 = await Service.create({
    title: 'Third Party Logistics',
    presentation:
      'We have many years in the logistics business. That is why we decided to offer our customers a third party logistic deal. In return our business will be able to provide you the opportunity to be Global and Scalable. Focus on what you are good at and let us handle the rest. Simply answer a few questions regarding your logistics needs and receive price quotes from our pre-connected 3PL-partners.',
    preview:
      'Outsource your logistic department and receive control over your entire supply chain',
    image:
      'https://www.nogin.com/wp-content/uploads/2019/11/E-commerce-Logistics.jpg',
  })

  const service7 = await Service.create({
    title: 'Carbon Footprint Report',
    preview:
      'Identify your what you can do about your company´s carbon footprint',
    presentation:
      'A carbon footprint is the total greenhouse gas (GHG) emissions caused directly and indirectly by. It is calculated by summing the emissions resulting from every stage of the service of your company. Identification and monitoring of carbon dioxide emissions provides valuable information about the environmental impact of transport and logistics operations, based on which you can set goals you can achieve. Whit this service we track your CO2 emissions, identify opportunities for efficiency and it is all delivered in a detailed reports',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY_FBH-vBawe88w84IlaSGMg99XdbaZKwMw&usqp=CAU',
  })

  const service8 = await Service.create({
    title: 'Optimization of Carbon Footprint',
    preview: 'Minimize the use of fossil fuels with our optimization analytics',
    presentation:
      'Big data analysis of the network flow and the supply chain of your organization. Identifying the part of the supply chain that have the highest yield of carbon emission. Consultation is then provided to optimize these critical and inefficient parts.',
    image:
      'https://www.ncsl.org/portals/1/ImageLibrary_New/Energy/co2-word-collage-485873480_1x.jpg',
  })

  const service9 = await Service.create({
    title: 'Offset Carbon Footprint',
    preview: 'Compensate for the release of carbon emissions',
    presentation:
      'Certified greenhouse gas compensation whit immediate effect on carbon dioxide emissions considering the lowest efficiency parts and boosting their performance. This will strengthen the values of your business with a clear message and with fast start solutions',
    image:
      'https://media.istockphoto.com/photos/hand-holding-small-tree-for-planting-concept-green-world-picture-id1135253768?k=6&m=1135253768&s=170667a&w=0&h=VAIE2HzOqj2QAhkzhYm7k6NiPe3-py5MRX_LRJWnp9o=',
  })

  // Adding people to areas
  await firstArea.addPeople(person1.id)
  await firstArea.addPeople(person2.id)
  await firstArea.addPeople(person3.id)

  await secondArea.addPeople(person4.id)
  await secondArea.addPeople(person5.id)
  await secondArea.addPeople(person6.id)

  await thirdArea.addPeople(person7.id)
  await thirdArea.addPeople(person8.id)
  await thirdArea.addPeople(person9.id)

  // Adding services to areas

  await firstArea.addService(service1.id)
  await firstArea.addService(service2.id)
  await firstArea.addService(service3.id)

  await secondArea.addService(service4.id)
  await secondArea.addService(service5.id)
  await secondArea.addService(service6.id)

  await thirdArea.addService(service7.id)
  await thirdArea.addService(service8.id)
  await thirdArea.addService(service9.id)

  // Adding services to people
  await person1.setService(service1.id)
  await person2.setService(service2.id)
  await person3.setService(service3.id)
  await person4.setService(service4.id)
  await person5.setService(service5.id)
  await person6.setService(service6.id)
  await person7.setService(service7.id)
  await person8.setService(service8.id)
  await person9.setService(service9.id)

  // Adding people to services
  await service1.setPerson(person1.id)
  await service2.setPerson(person2.id)
  await service3.setPerson(person3.id)
  await service4.setPerson(person4.id)
  await service5.setPerson(person5.id)
  await service6.setPerson(person6.id)
  await service7.setPerson(person7.id)
  await service8.setPerson(person8.id)
  await service9.setPerson(person9.id)
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true })
  // Call the function to insert some fake data
  await insertFakeData()

  return db
}

export default initializeDatabase
