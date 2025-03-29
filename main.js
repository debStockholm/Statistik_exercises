import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js'

addMdToPage(`
  ## All students
`);

let students_female = await dbQuery(`select Age, count(*) as ALLFemales
   from Depression_study
   where gender='Female'
   group by Age
   order by Age Desc`);
tableFromData({ data: students_female });
let students_female_age_group_YES = await dbQuery(` 
  select Age, count(*) as FemaleCountwithDepression
  from Depression_study
  where Depression=1 and gender='Female'
  group by Age
  order by FemaleCountwithDepression desc`);
tableFromData({ data: students_female_age_group_YES });
let students_female_age_group_NO = await dbQuery(`select Age, count(*) as FemaleCountNoDepression 
  from Depression_study
  where Depression=0 and gender='Female'
  group by Age
  order by FemaleCountNoDepression desc`);
tableFromData({ data: students_female_age_group_NO });
