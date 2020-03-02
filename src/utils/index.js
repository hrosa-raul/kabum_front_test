import { parseISO } from 'date-fns';


function clearMask(value){
  return value.replace(/[^\w\s]/gi, '')
}


function formatData(data){
  return parseISO(new Date(data))
}

export { clearMask, formatData }