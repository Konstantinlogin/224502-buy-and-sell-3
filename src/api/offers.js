route.get(`/:offerId`, (req, res) => {
  const {
    offerId
  } = req.params;
  const offer = offerService.findOne(offerId);

  if (!offer) {
    return res.status(HttpCode.NOT_FOUND)
      .send(`Not found with ${offerId}`);
  }

  return res.status(HttpCode.OK)
    .json(offer);
});
