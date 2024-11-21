import { Sequelize } from 'sequelize'

const db = new Sequelize('postgresql://res_api_photoblog_user:sFf044Knd8Jtnrd8ZnaXbYt56dJasoTd@dpg-csvp5a1u0jms738b36vg-a.oregon-postgres.render.com/res_api_photoblog?ssl=true')

export default db 