import deleteFromArray from 'delete-from-array';

import { useRandomArrayPack } from 'arrays-tool';

const tools = useRandomArrayPack();

const array = [5, 22, 14, 12, 33];

const shuffledArray = tools.shuffle(array);

console.log(shuffledArray);



const deletedValues = [12] // Values to be deleted <Array>

const newArray = deleteFromArray(shuffledArray, deletedValues);

console.log(newArray); 

