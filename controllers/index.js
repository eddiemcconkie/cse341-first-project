const displayJoke = (req, res) => {
  const data = 'This is a bad joke'
  res.status(200).send(data)
}

module.exports = {
  displayJoke,
}
