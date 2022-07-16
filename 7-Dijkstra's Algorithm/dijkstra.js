const costs = {
    'A': 6,
    'B': 2,
    'Fin': 1000
}

const parents = {
    'A': 'Start',
    'B': 'Start',
    'Fin': ''
}

const graph = {
    'Start': {
        'A': 6,
        'B': 2
    },
    'A': {
        'Fin': 1
    },
    'B': {
        'A': 3,
        'Fin': 5
    },
    'Fin': ''
}

let processed = [];


const find_lowest_cost_node = (costs) => {
    let lowest_cost = 1000;
    let lowest_cost_node = 'none';
    for(const node in costs){
        let cost = costs[node];
        if (cost < lowest_cost && !processed.includes(node)){   
            lowest_cost = cost;
            lowest_cost_node = node;
        }
    }
    return lowest_cost_node;
}

const dijkstra = () => {
    let node = find_lowest_cost_node(costs);
    while (node != 'none') {
        let cost = costs[node];
        let neighbors = graph[node];
        for (const key in neighbors){
            let new_cost = cost + neighbors[key];
            if (new_cost < costs[key]){
                costs[key] = new_cost;
                parents[key] = node;
            }
        }
        processed.push(node);
        node = find_lowest_cost_node(costs);
    }
    return costs['Fin'];
}

// console.log(find_lowest_cost_node(costs));
// console.log(graph['B']);
console.log(dijkstra());



