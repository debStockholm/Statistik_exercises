import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js'

addMdToPage(`
  ## All students
`);

let students = await dbQuery('SELECT * FROM Depression_study LIMIT 50');
tableFromData({ data: students });
