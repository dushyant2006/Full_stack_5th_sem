function memorize(fn){
  const cache={};
  return function(x,y){
    const key = `${x},${y}`;
    if(cache[key]){
        console.log('Fetching from cache');
        return cache[key];
    }
    const result = fn(x,y);
    cache[key] = result;
    return result;
  }
}
const add = memorize(function(x,y){
    return x+y;
});
console.log(add(1,2));
console.log(add(1,2));

// first time it will compute the result and store it in the cache.
//  The second time it will fetch the result from the cache instead of computing it again.

// always apply memoization to pure functions.
// pure functions-->>
// which are functions that always return the same output for the same input and have no side effects.