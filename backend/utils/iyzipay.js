import Iyzipay from "iyzipay";


async function CreateIyziPayment(req, res) {

  const iyzipay = new Iyzipay({
    apiKey: process.env.IYZICO_API_KEY,
    secretKey: process.env.IYZICO_SECRET_KEY,
    uri: "https://sandbox-api.iyzipay.com",
  });

  const {
    price,
    paidPrice,
    currency,
    basketId,
    paymentCard,
    buyer,
    shippingAddress,
    billingAddress,
    basketItems,
  } = req.body;

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: "123456789",
    price: price,
    paidPrice: paidPrice,
    currency: currency,
    installment: 1,
    basketId: basketId,
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: paymentCard,
    buyer: buyer,
    shippingAddress: shippingAddress,
    billingAddress: billingAddress,
    basketItems: basketItems,
  };

  iyzipay.payment.create(request, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      res.status(200).json(result);
    }
  });

  return request;
}

export default CreateIyziPayment;
