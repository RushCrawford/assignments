function encounter(){
    console.log('');
    let encounterGenerator = Math.floor(Math.random() * 11) +1;
    encounterGenerator === 1 ? console.log("Oh no! A Cave Troll has appeared!") ? fight()
    :
    encounterGenerator === 2 ? console.log("Oh no! A Giant Spider has appeared!") ? fight()
    :
    encounterGenerator === 3 ? console.log("Oh no! An Umberhulk has appeared!") ? fight()
    :
    encounterGenerator === 4 ? console.log("Oh no! An Animated Skeleton has appeared!") ? fight() 
    :
    console.log('Looks like the coast is clear for now, but proceed carefully.')
  }
