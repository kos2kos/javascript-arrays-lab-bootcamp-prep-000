const app = "I don't do much."
function destructivelyAppendKitten(n){
  kittens.push(n)
  return kittens
}
function destructivelyPrependKitten(n){
  kittens.unshift(n)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.shift(-1)
  return kittens
}