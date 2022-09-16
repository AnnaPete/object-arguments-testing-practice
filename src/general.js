// you'll need to comment out the corresponding function below when you write it.

function getFavoriteFood(foodOpinions) {
  return foodOpinions.favoriteFood;
}
function findDifference(moneyStillNeeded) {
  return moneyStillNeeded.ipadCost - moneyStillNeeded.moneySaved;
}
function listFavoriteDestinations(destinations) {
  return destinations.favoriteDestinations;
}
function filterScores(subject, scores) {
  for (var i = 0; i < scores[subject].length; i++) {
    if (scores[subject][i] < 70) {
      scores[subject].splice(i, 1);
      i--
    }
  }
  return scores[subject];
}

module.exports = {
  getFavoriteFood,
  findDifference,
  listFavoriteDestinations,
  filterScores,
}
