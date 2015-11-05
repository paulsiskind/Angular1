function formatJSON(data){
  return JSON.stringify(populations(data, 'id'), null,' ')
}

function formatHTML(data){
  return populations(data).map(function(row){
    return '<p>'+ row + '</p>'
      }).join('\n')
}

function populations(input, property){
  return input.map(function(record){
    return record.city + " ("+ record.population+")"
  })
}

var data = [
{id: 1, city: 'NY', state: 'NY', population: 20},
{id: 2, city: 'Denver', state: 'CO', population: 20},
{id: 3, city: 'Durango', state: 'CO', population: 20}
]

function populationsJSON(data){
  return formatJSON(populations(data))
}


function populationsHTML(data){
  return formatHTML(populations(data))
}



console.log(formatJSON(data))
console.log(formatHTML(data))