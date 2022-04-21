const displayName = (req, res) => {
  const data = 'Marielle McConkie'
  res.status(200).send(data)
}

module.exports = {
  displayName,
}
