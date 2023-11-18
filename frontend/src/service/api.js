import axios from "axios";
const URL = "https://flipkartclone-backend-7xx3.onrender.com";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    // if (response.data && response.data.token) {
    //   localStorage.setItem('access_token', response.data.token);
    // }

    return response;
  } catch (error) {
    console.log("error while calling login api", error);
    return error.response;
  }
};


export const payUsingRazorPay = async (amount, account) => {
  try {
    const {
      data: { key },
    } = await axios.get(`${URL}/getkey`);
    const {
      data: { order },
    } = await axios.post(`${URL}/payment`, {
      amount,
    });
    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sweta Patel",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/128665200?v=4",
      order_id: order.id,
      callback_url: `${URL}/paymentverification`,
      prefill: {
        name: account,
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2874f0",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open()
  } catch (error) {
    console.log(error);
  }
};
