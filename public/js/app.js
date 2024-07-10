export function areTheyInLove(flower1Petals, flower2Petals) {
  if (!Number.isInteger(flower1Petals) || !Number.isInteger(flower2Petals)) {
    return "Petal counts need to be integers";
  }
  return (
    (flower1Petals % 2 === 0 && flower2Petals % 2 !== 0) ||
    (flower1Petals % 2 !== 0 && flower2Petals % 2 === 0)
  );
}
